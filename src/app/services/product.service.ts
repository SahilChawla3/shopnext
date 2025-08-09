import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, FilterOptions } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products$ = new BehaviorSubject<Product[]>([]);
  private searchTerm$ = new BehaviorSubject<string>('');
  private filters$ = new BehaviorSubject<FilterOptions>({
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    inStock: false
  });

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(): void {
    // Mock data - in real app this would be from API
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium quality wireless headphones with noise cancellation',
        price: 199.99,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'electronics',
        rating: 4.5,
        inStock: true,
        featured: true,
        tags: ['wireless', 'audio', 'bluetooth']
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        description: 'Track your fitness goals with this advanced smartwatch',
        price: 299.99,
        image: 'https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'electronics',
        rating: 4.3,
        inStock: true,
        featured: true,
        tags: ['smartwatch', 'fitness', 'health']
      },
      {
        id: 3,
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable and sustainable organic cotton t-shirt',
        price: 29.99,
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'apparel',
        rating: 4.2,
        inStock: true,
        featured: false,
        tags: ['cotton', 'organic', 'sustainable']
      },
      {
        id: 4,
        name: 'Modern Table Lamp',
        description: 'Stylish LED table lamp with adjustable brightness',
        price: 79.99,
        image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'home',
        rating: 4.7,
        inStock: true,
        featured: true,
        tags: ['lamp', 'led', 'modern']
      },
      {
        id: 5,
        name: 'Wireless Gaming Mouse',
        description: 'High-precision gaming mouse with customizable RGB lighting',
        price: 89.99,
        image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'electronics',
        rating: 4.6,
        inStock: false,
        featured: false,
        tags: ['gaming', 'mouse', 'rgb']
      },
      {
        id: 6,
        name: 'Designer Backpack',
        description: 'Stylish and functional backpack for daily use',
        price: 149.99,
        image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'apparel',
        rating: 4.4,
        inStock: true,
        featured: false,
        tags: ['backpack', 'designer', 'travel']
      }
    ];

    this.products$.next(mockProducts);
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.products$.pipe(
      map(products => products.filter(product => product.featured))
    );
  }

  getFilteredProducts(): Observable<Product[]> {
    return combineLatest([
      this.products$,
      this.searchTerm$,
      this.filters$
    ]).pipe(
      map(([products, searchTerm, filters]) => {
        return products.filter(product => {
          const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.description.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = !filters.category || product.category === filters.category;
          const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
          const matchesStock = !filters.inStock || product.inStock;

          return matchesSearch && matchesCategory && matchesPrice && matchesStock;
        });
      })
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.products$.pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  setSearchTerm(term: string): void {
    this.searchTerm$.next(term);
  }

  setFilters(filters: FilterOptions): void {
    this.filters$.next(filters);
  }

  getCategories(): Observable<string[]> {
    return this.products$.pipe(
      map(products => [...new Set(products.map(product => product.category))])
    );
  }
}