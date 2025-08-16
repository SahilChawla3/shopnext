import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="product-details-page" *ngIf="product$ | async as product; else loading">
      <nav class="breadcrumb">
        <button (click)="goBack()" class="back-btn">
          ← Back to Products
        </button>
        <div class="breadcrumb-trail">
          <span>Products</span> 
          <span class="separator">›</span> 
          <span>{{ product.category | titlecase }}</span>
          <span class="separator">›</span>
          <span class="current">{{ product.name }}</span>
        </div>
      </nav>

      <div class="product-container">
        <div class="product-image-section">
          <div class="main-image">
            <img [src]="product.image" [alt]="product.name" />
            <div class="image-badge" *ngIf="!product.inStock">
              Out of Stock
            </div>
          </div>
        </div>

        <div class="product-info-section">
          <div class="product-header">
            <h1 class="product-title">{{ product.name }}</h1>
            <div class="product-rating">
              <div class="stars">
                <span *ngFor="let star of getStars(product.rating); trackBy: trackByIndex" 
                      [ngClass]="{'filled': star, 'empty': !star}">★</span>
              </div>
              <span class="rating-text">({{ product.rating }} out of 5)</span>
            </div>
          </div>

          <div class="product-price-section">
            <div class="price-info">
              <span class="current-price">\${{ product.price.toFixed(2) }}</span>
              <span class="category-badge">{{ product.category | titlecase }}</span>
            </div>
          </div>

          <div class="product-description">
            <h3>Description</h3>
            <p>{{ product.description }}</p>
          </div>

          <div class="product-features">
            <h3>Product Features</h3>
            <ul class="features-list">
              <li *ngFor="let tag of product.tags; trackBy: trackByTag" class="feature-item">
                {{ tag | titlecase }}
              </li>
            </ul>
          </div>

          <div class="product-actions">
            <div class="quantity-section">
              <label for="quantity">Quantity:</label>
              <div class="quantity-controls">
                <button (click)="decreaseQuantity()" [disabled]="quantity <= 1" class="quantity-btn">-</button>
                <input type="number" id="quantity" [(ngModel)]="quantity" min="1" max="10" class="quantity-input">
                <button (click)="increaseQuantity()" [disabled]="quantity >= 10" class="quantity-btn">+</button>
              </div>
            </div>

            <div class="action-buttons">
              <button 
                (click)="addToCart(product)"
                [disabled]="!product.inStock"
                class="btn btn-primary">
                {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
              </button>
              <button 
                (click)="buyNow(product)"
                [disabled]="!product.inStock"
                class="btn btn-secondary">
                Buy Now
              </button>
            </div>
          </div>

          <div class="product-meta">
            <div class="meta-item">
              <strong>Availability:</strong>
              <span [ngClass]="{'in-stock': product.inStock, 'out-of-stock': !product.inStock}">
                {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
              </span>
            </div>
            <div class="meta-item">
              <strong>Category:</strong>
              <span>{{ product.category | titlecase }}</span>
            </div>
            <div class="meta-item" *ngIf="product.featured">
              <strong>Featured Product</strong>
              <span class="featured-badge">⭐ Featured</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ng-template #loading>
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    </ng-template>
  `,
  styles: [`
    .product-details-page {
      min-height: 100vh;
      background: var(--bg-secondary);
      transition: background-color 0.3s ease;
    }

    .breadcrumb {
      background: var(--bg-primary);
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-primary);
      margin-bottom: 2rem;
    }

    .back-btn {
      background: none;
      border: none;
      color: var(--accent-blue);
      cursor: pointer;
      font-weight: 500;
      padding: 0.5rem 0;
      margin-bottom: 0.5rem;
      margin-left: 0.5rem;
      transition: color 0.3s ease;
    }

    .back-btn:hover {
      color: var(--accent-blue-hover);
    }

    .breadcrumb-trail {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }

    .separator {
      margin: 0 0.5rem;
    }

    .current {
      color: var(--text-primary);
      font-weight: 500;
    }

    .product-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      background: var(--bg-primary);
      border-radius: 16px;
      padding: 3rem;
      box-shadow: 0 4px 6px var(--shadow-light);
    }

    .product-image-section {
      position: relative;
    }

    .main-image {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
    }

    .main-image img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }

    .image-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(239, 68, 68, 0.9);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .product-info-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .product-header h1 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 1rem 0;
    }

    .product-rating {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .stars {
      display: flex;
      gap: 0.25rem;
    }

    .stars span {
      color: var(--text-tertiary);
      font-size: 1.2rem;
    }

    .stars span.filled {
      color: #fbbf24;
    }

    .rating-text {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .price-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .current-price {
      font-size: 2rem;
      font-weight: bold;
      color: var(--accent-blue);
    }

    .category-badge {
      background: var(--bg-tertiary);
      color: var(--text-secondary);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    .product-description h3,
    .product-features h3 {
      color: var(--text-primary);
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
    }

    .product-description p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .feature-item {
      background: var(--accent-blue);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .quantity-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .quantity-section label {
      font-weight: 600;
      color: var(--text-primary);
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      border: 2px solid var(--border-primary);
      border-radius: 8px;
      overflow: hidden;
    }

    .quantity-btn {
      background: var(--bg-secondary);
      border: none;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--text-primary);
      transition: background 0.3s ease;
    }

    .quantity-btn:hover:not(:disabled) {
      background: var(--bg-tertiary);
    }

    .quantity-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .quantity-input {
      border: none;
      padding: 0.75rem;
      width: 60px;
      text-align: center;
      font-weight: 600;
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    .quantity-input:focus {
      outline: none;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn {
      flex: 1;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-primary {
      background: var(--accent-blue);
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: var(--accent-blue-hover);
    }

    .btn-secondary {
      background: var(--accent-orange);
      color: white;
    }

    .btn-secondary:hover:not(:disabled) {
      background: var(--accent-orange-hover);
    }

    .product-meta {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-primary);
    }

    .meta-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .in-stock {
      color: var(--success);
      font-weight: 600;
    }

    .out-of-stock {
      color: var(--error);
      font-weight: 600;
    }

    .featured-badge {
      background: linear-gradient(135deg, var(--warning), var(--accent-orange));
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50vh;
      gap: 1rem;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid var(--bg-tertiary);
      border-top: 4px solid var(--accent-blue);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 1024px) {
      .product-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
      }

      .main-image img {
        height: 400px;
      }
    }

    @media (max-width: 768px) {
      .product-container {
        padding: 1.5rem;
      }

      .product-header h1 {
        font-size: 1.5rem;
      }

      .current-price {
        font-size: 1.5rem;
      }

      .price-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .action-buttons {
        flex-direction: column;
      }

      .breadcrumb {
        padding: 1rem;
      }

      .breadcrumb-trail {
        display: none;
      }
    }
  `]
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<Product | undefined>;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productService.getProductById(productId);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  getStars(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => i < fullStars);
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByTag(index: number, tag: string): string {
    return tag;
  }

  increaseQuantity(): void {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: Product): void {
    console.log(`Added ${this.quantity} x ${product.name} to cart`);
    // In a real app, this would integrate with a cart service
  }

  buyNow(product: Product): void {
    console.log(`Buying ${this.quantity} x ${product.name}`);
    // In a real app, this would navigate to checkout
  }
}