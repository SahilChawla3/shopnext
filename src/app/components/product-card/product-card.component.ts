import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="product-card" [ngClass]="{'out-of-stock': !product.inStock}">
      <div class="card-image">
        <img [src]="product.image" [alt]="product.name" />
        <div class="card-overlay" *ngIf="!product.inStock">
          <span>Out of Stock</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-rating">
          <div class="stars">
            <span *ngFor="let star of getStars(); trackBy: trackByIndex" 
                  [ngClass]="{'filled': star, 'empty': !star}">★</span>
          </div>
          <span class="rating-text">({{ product.rating }})</span>
        </div>
        <div class="product-price">
          <span class="price">\${{ product.price.toFixed(2) }}</span>
          <span class="category">{{ product.category | titlecase }}</span>
        </div>
        <div class="card-actions">
          <button 
            class="btn btn-primary" 
            [routerLink]="['/product', product.id]"
            [disabled]="!product.inStock">
            View Details
          </button>
          <button 
            class="btn btn-secondary" 
            (click)="addToCart()"
            [disabled]="!product.inStock">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: var(--bg-primary);
      border-radius: 12px;
      box-shadow: 0 4px 6px var(--shadow-light);
      overflow: hidden;
      transition: all 0.3s ease;
      position: relative;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px var(--shadow-medium);
    }

    .product-card.out-of-stock {
      opacity: 0.7;
    }

    .card-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .product-card:hover .card-image img {
      transform: scale(1.05);
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .card-content {
      padding: 1.5rem;
    }

    .product-name {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0 0 0.5rem 0;
      color: var(--text-primary);
    }

    .product-description {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin: 0 0 1rem 0;
      line-height: 1.4;
    }

    .product-rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .stars {
      display: flex;
    }

    .stars span {
      color: var(--text-tertiary);
      font-size: 1rem;
    }

    .stars span.filled {
      color: #fbbf24;
    }

    .rating-text {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .product-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .price {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--accent-blue);
    }

    .category {
      background: var(--bg-tertiary);
      color: var(--text-secondary);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.8rem;
      text-transform: uppercase;
    }

    .card-actions {
      display: flex;
      gap: 0.5rem;
    }

    .btn {
      flex: 1;
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      text-align: center;
      display: inline-block;
    }

    .btn:disabled {
      opacity: 0.5;
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
      background: var(--bg-tertiary);
      color: var(--text-primary);
    }

    .btn-secondary:hover:not(:disabled) {
      background: var(--border-primary);
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;

  getStars(): boolean[] {
    const rating = Math.floor(this.product.rating);
    return Array.from({ length: 5 }, (_, i) => i < rating);
  }

  trackByIndex(index: number): number {
    return index;
  }

  addToCart(): void {
    // Implementation would integrate with cart service
    console.log(`Added ${this.product.name} to cart`);
  }
}