import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FilterSidebarComponent } from '../../components/filter-sidebar/filter-sidebar.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, FilterSidebarComponent, ProductCardComponent],
  template: `
    <div class="products-page">
      <div class="page-header">
        <div class="header-content">
          <h1>Our Products</h1>
          <p>Discover our carefully curated collection of premium items</p>
        </div>
      </div>

      <div class="products-container">
        <aside class="sidebar">
          <app-filter-sidebar></app-filter-sidebar>
        </aside>

        <main class="main-content">
          <div class="search-section">
            <app-search-bar></app-search-bar>
          </div>

          <div class="products-section">
            <div class="products-header">
              <h2>Products</h2>
              <div class="results-count">
                <span *ngIf="(filteredProducts$ | async)?.length as count">
                  {{ count }} {{ count === 1 ? 'product' : 'products' }} found
                </span>
              </div>
            </div>

            <div class="products-grid" *ngIf="(filteredProducts$ | async)?.length; else noProducts">
              <app-product-card 
                *ngFor="let product of filteredProducts$ | async; trackBy: trackByProductId"
                [product]="product">
              </app-product-card>
            </div>

            <ng-template #noProducts>
              <div class="no-products">
                <div class="no-products-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <h3>No products found</h3>
                <p>Try adjusting your search criteria or filters to find what you're looking for.</p>
              </div>
            </ng-template>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .products-page {
      min-height: 100vh;
      background: #f9fafb;
    }

    .page-header {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
      padding: 4rem 0 2rem;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      text-align: center;
    }

    .header-content h1 {
      font-size: 3rem;
      font-weight: bold;
      margin: 0 0 1rem 0;
    }

    .header-content p {
      font-size: 1.2rem;
      margin: 0;
      opacity: 0.9;
    }

    .products-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 2rem;
      align-items: start;
    }

    .sidebar {
      position: sticky;
      top: 2rem;
    }

    .main-content {
      min-width: 0;
    }

    .search-section {
      margin-bottom: 2rem;
    }

    .products-section {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .products-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .products-header h2 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #1f2937;
      margin: 0;
    }

    .results-count {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .no-products {
      text-align: center;
      padding: 4rem 2rem;
    }

    .no-products-icon {
      color: #9ca3af;
      margin-bottom: 1rem;
    }

    .no-products h3 {
      font-size: 1.5rem;
      color: #1f2937;
      margin: 0 0 1rem 0;
    }

    .no-products p {
      color: #6b7280;
      margin: 0;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 1024px) {
      .products-container {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .sidebar {
        position: static;
      }

      .page-header {
        padding: 2rem 0 1rem;
      }

      .header-content h1 {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: 1fr;
      }

      .products-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      .header-content h1 {
        font-size: 2rem;
      }

      .products-container {
        padding: 1rem;
      }

      .products-section {
        padding: 1.5rem;
      }
    }
  `]
})
export class ProductsComponent implements OnInit {
  filteredProducts$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.filteredProducts$ = this.productService.getFilteredProducts();
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}