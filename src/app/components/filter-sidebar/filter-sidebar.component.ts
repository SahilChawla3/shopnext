import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { FilterOptions } from '../../models/product.model';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="filter-sidebar">
      <div class="filter-header">
        <h3>Filters</h3>
        <button class="clear-filters" (click)="clearFilters()">Clear All</button>
      </div>

      <div class="filter-section">
        <label class="filter-label">Category</label>
        <select [(ngModel)]="filters.category" (change)="applyFilters()" class="filter-select">
          <option value="">All Categories</option>
          <option *ngFor="let category of categories; trackBy: trackByCategory" [value]="category">
            {{ category | titlecase }}
          </option>
        </select>
      </div>

      <div class="filter-section">
        <label class="filter-label">Price Range</label>
        <div class="price-inputs">
          <input 
            type="number" 
            [(ngModel)]="filters.minPrice" 
            (input)="applyFilters()"
            placeholder="Min" 
            class="price-input">
          <span>to</span>
          <input 
            type="number" 
            [(ngModel)]="filters.maxPrice" 
            (input)="applyFilters()"
            placeholder="Max" 
            class="price-input">
        </div>
        <div class="price-range">
          <input 
            type="range" 
            [(ngModel)]="filters.maxPrice" 
            (input)="applyFilters()"
            min="0" 
            max="1000" 
            step="10" 
            class="range-slider">
          <div class="range-labels">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
      </div>

      <div class="filter-section">
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            [(ngModel)]="filters.inStock" 
            (change)="applyFilters()"
            class="filter-checkbox">
          <span class="checkmark"></span>
          In Stock Only
        </label>
      </div>

      <div class="filter-summary">
        <h4>Active Filters:</h4>
        <div class="active-filters">
          <span *ngIf="filters.category" class="filter-tag">
            {{ filters.category | titlecase }}
            <button (click)="removeFilter('category')" class="remove-filter">×</button>
          </span>
          <span *ngIf="filters.minPrice > 0 || filters.maxPrice < 10000" class="filter-tag">
            $ {{ filters.minPrice }} - $ {{ filters.maxPrice }}
            <button (click)="removeFilter('price')" class="remove-filter">×</button>
          </span>
          <span *ngIf="filters.inStock" class="filter-tag">
            In Stock
            <button (click)="removeFilter('stock')" class="remove-filter">×</button>
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .filter-sidebar {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      height: fit-content;
      position: sticky;
      top: 6rem;
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .filter-header h3 {
      margin: 0;
      color: #1f2937;
    }

    .clear-filters {
      background: none;
      border: none;
      color: #2563eb;
      cursor: pointer;
      font-size: 0.9rem;
      text-decoration: underline;
    }

    .filter-section {
      margin-bottom: 1.5rem;
    }

    .filter-label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .filter-select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      background: white;
      font-size: 0.9rem;
    }

    .filter-select:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .price-inputs {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .price-input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .price-input:focus {
      outline: none;
      border-color: #2563eb;
    }

    .price-range {
      margin-top: 1rem;
    }

    .range-slider {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .range-labels {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #6b7280;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-weight: 500;
      color: #374151;
    }

    .filter-checkbox {
      margin-right: 0.5rem;
    }

    .filter-summary {
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
    }

    .filter-summary h4 {
      margin: 0 0 1rem 0;
      color: #1f2937;
      font-size: 0.9rem;
    }

    .active-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .filter-tag {
      background: #dbeafe;
      color: #1e40af;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .remove-filter {
      background: none;
      border: none;
      color: #1e40af;
      cursor: pointer;
      font-size: 1rem;
      padding: 0;
    }

    @media (max-width: 1024px) {
      .filter-sidebar {
        position: static;
        margin-bottom: 2rem;
      }
    }
  `]
})
export class FilterSidebarComponent implements OnInit, OnDestroy {
  filters: FilterOptions = {
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    inStock: false
  };

  categories: string[] = [];
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilters(): void {
    this.productService.setFilters(this.filters);
  }

  clearFilters(): void {
    this.filters = {
      category: '',
      minPrice: 0,
      maxPrice: 1000,
      inStock: false
    };
    this.applyFilters();
  }

  removeFilter(filterType: string): void {
    switch (filterType) {
      case 'category':
        this.filters.category = '';
        break;
      case 'price':
        this.filters.minPrice = 0;
        this.filters.maxPrice = 1000;
        break;
      case 'stock':
        this.filters.inStock = false;
        break;
    }
    this.applyFilters();
  }

  trackByCategory(index: number, category: string): string {
    return category;
  }
}