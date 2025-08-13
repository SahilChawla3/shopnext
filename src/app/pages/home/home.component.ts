import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent, ProductCardComponent],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to ShopNext</h1>
          <p class="hero-subtitle">
            Discover premium electronic gadgets, stylish apparel, and modern home accessories 
            all in one place. Shop with confidence and style.
          </p>
          <div class="hero-actions">
            <button routerLink="/products" class="btn btn-primary">Shop Now</button>
            <button routerLink="/about" class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" 
               alt="Shopping Experience" />
        </div>
      </section>

      <!-- Featured Products Carousel -->
      <section class="featured-section">
        <app-carousel *ngIf="featuredProducts$ | async as products" [products]="products"></app-carousel>
      </section>

      <!-- Categories Section -->
      <section class="categories-section">
        <div class="section-header">
          <h2>Shop by Category</h2>
          <p>Find exactly what you're looking for</p>
        </div>
        <div class="categories-grid">
          <div class="category-card electronics">
            <div class="category-content">
              <h3>Electronics</h3>
              <p>Latest gadgets and technology</p>
              <a routerLink="/products" class="category-link">Explore →</a>
            </div>
          </div>
          <div class="category-card apparel">
            <div class="category-content">
              <h3>Apparel</h3>
              <p>Stylish clothing and accessories</p>
              <a routerLink="/products" class="category-link">Explore →</a>
            </div>
          </div>
          <div class="category-card home">
            <div class="category-content">
              <h3>Home & Garden</h3>
              <p>Beautiful items for your space</p>
              <a routerLink="/products" class="category-link">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="features-section">
        <div class="section-header">
          <h2>Why Choose ShopNext?</h2>
          <p>We're committed to providing the best shopping experience</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <h3>Quality Guarantee</h3>
            <p>All products are carefully selected and tested for quality and durability.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Fast Shipping</h3>
            <p>Quick and reliable delivery to your doorstep with tracking information.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Our dedicated customer service team is always ready to help you.</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      background: var(--bg-primary);
      transition: background-color 0.3s ease;
    }

    .hero-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      padding: 4rem 0;
      max-width: 1200px;
      margin: 0 auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .hero-content {
      max-width: 500px;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 1.5rem 0;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      margin: 0 0 2rem 0;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
    }

    .hero-image {
      display: flex;
      justify-content: center;
    }

    .hero-image img {
      width: 100%;
      max-width: 500px;
      height: 400px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s ease;
      text-align: center;
    }

    .btn-primary {
      background: var(--accent-blue);
      color: white;
    }

    .btn-primary:hover {
      background: var(--accent-blue-hover);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: var(--bg-primary);
      color: var(--accent-blue);
      border: 2px solid var(--accent-blue);
    }

    .btn-secondary:hover {
      background: var(--accent-blue);
      color: white;
    }

    .featured-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .categories-section,
    .features-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 1rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 1rem 0;
    }

    .section-header p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin: 0;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .category-card {
      height: 200px;
      border-radius: 16px;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .category-card:hover {
      transform: translateY(-4px);
    }

    .category-card.electronics {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                        url('https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600');
    }

    .category-card.apparel {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                        url('https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600');
    }

    .category-card.home {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                        url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600');
    }

    .category-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
      color: white;
    }

    .category-content h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 0.5rem 0;
    }

    .category-content p {
      margin: 0 0 1rem 0;
      opacity: 0.9;
    }

    .category-link {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.3s ease;
    }

    .category-link:hover {
      opacity: 0.8;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: var(--bg-primary);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 6px var(--shadow-light);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
    }

    .feature-icon {
      color: var(--accent-blue);
      margin-bottom: 1.5rem;
    }

    .feature-card h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 1rem 0;
    }

    .feature-card p {
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.6;
    }

    @media (max-width: 1024px) {
      .hero-section {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 2rem 0;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 200px;
      }

      .categories-grid,
      .features-grid {
        grid-template-columns: 1fr;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredProducts$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.featuredProducts$ = this.productService.getFeaturedProducts();
  }
}