import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="carousel-container">
      <div class="carousel-header">
        <h2>Featured Products</h2>
        <div class="carousel-controls">
          <button (click)="prevSlide()" class="carousel-btn prev-btn">‹</button>
          <button (click)="nextSlide()" class="carousel-btn next-btn">›</button>
        </div>
      </div>
      
      <div class="carousel-wrapper" #carouselWrapper>
        <div class="carousel-track" 
             #carouselTrack
             [style.transform]="'translateX(' + (-currentSlide * slideWidth) + 'px)'">
          <div *ngFor="let product of products; trackBy: trackByProductId" 
               class="carousel-slide">
            <div class="featured-card">
              <div class="featured-image">
                <img [src]="product.image" [alt]="product.name" />
                <div class="image-overlay">
                  <button [routerLink]="['/product', product.id]" class="view-product-btn">
                    View Product
                  </button>
                </div>
              </div>
              <div class="featured-content">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <div class="featured-price">
                  <span class="price">\${{ product.price.toFixed(2) }}</span>
                  <div class="rating">
                    <span *ngFor="let star of getStars(product.rating); trackBy: trackByIndex" 
                          [ngClass]="{'filled': star, 'empty': !star}">★</span>
                    <span class="rating-text">({{ product.rating }})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-indicators">
        <button *ngFor="let product of products; let i = index; trackBy: trackByProductId"
                (click)="goToSlide(i)"
                class="indicator"
                [class.active]="i === currentSlide">
        </button>
      </div>
    </div>
  `,
  styles: [`
    .carousel-container {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 3rem;
    }

    .carousel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem 1rem;
    }

    .carousel-header h2 {
      margin: 0;
      color: #1f2937;
      font-size: 1.5rem;
    }

    .carousel-controls {
      display: flex;
      gap: 0.5rem;
    }

    .carousel-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: #2563eb;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carousel-btn:hover {
      background: #1d4ed8;
      transform: scale(1.05);
    }

    .carousel-wrapper {
      overflow: hidden;
      padding: 0 2rem;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
      gap: 2rem;
    }

    .carousel-slide {
      min-width: 100%;
      flex: 0 0 auto;
    }

    .featured-card {
      display: flex;
      background: #f8fafc;
      border-radius: 12px;
      overflow: hidden;
      height: 300px;
    }

    .featured-image {
      flex: 1;
      position: relative;
      overflow: hidden;
    }

    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .featured-card:hover .featured-image img {
      transform: scale(1.05);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .featured-card:hover .image-overlay {
      opacity: 1;
    }

    .view-product-btn {
      background: #2563eb;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.3s ease;
    }

    .view-product-btn:hover {
      background: #1d4ed8;
    }

    .featured-content {
      flex: 1;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .featured-content h3 {
      margin: 0 0 1rem 0;
      color: #1f2937;
      font-size: 1.5rem;
    }

    .featured-content p {
      color: #6b7280;
      margin: 0 0 2rem 0;
      line-height: 1.6;
    }

    .featured-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2563eb;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .rating span {
      color: #d1d5db;
    }

    .rating span.filled {
      color: #fbbf24;
    }

    .rating-text {
      font-size: 0.9rem;
      color: #6b7280;
      margin-left: 0.5rem;
    }

    .carousel-indicators {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      padding: 1.5rem;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: #d1d5db;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .indicator.active {
      background: #2563eb;
    }

    @media (max-width: 768px) {
      .featured-card {
        flex-direction: column;
        height: auto;
      }

      .featured-image {
        height: 200px;
      }

      .featured-content {
        padding: 1.5rem;
      }

      .carousel-header {
        padding: 1.5rem 1.5rem 1rem;
      }

      .carousel-wrapper {
        padding: 0 1.5rem;
      }
    }
  `]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() products: Product[] = [];
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  currentSlide = 0;
  slideWidth = 0;
  private autoSlideInterval?: number;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.calculateSlideWidth();
    });
  }

  private calculateSlideWidth(): void {
    if (this.carouselWrapper) {
      this.slideWidth = this.carouselWrapper.nativeElement.offsetWidth;
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.products.length - 1;
    }
    this.resetAutoSlide();
  }

  nextSlide(): void {
    if (this.currentSlide < this.products.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = window.setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }

  getStars(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => i < fullStars);
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  trackByIndex(index: number): number {
    return index;
  }
}