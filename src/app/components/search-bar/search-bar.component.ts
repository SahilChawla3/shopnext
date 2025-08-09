import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-container">
      <div class="search-input-wrapper">
        <input 
          type="text"
          [(ngModel)]="searchTerm"
          (input)="onSearchInput($event)"
          placeholder="Search products..."
          class="search-input"
          autocomplete="off">
        <div class="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <button 
          *ngIf="searchTerm" 
          (click)="clearSearch()"
          class="clear-search">
          ×
        </button>
      </div>
      <div *ngIf="searchTerm && searchTerm.length > 0" class="search-info">
        Searching for: <strong>{{ searchTerm }}</strong>
      </div>
    </div>
  `,
  styles: [`
    .search-container {
      width: 100%;
      margin-bottom: 1rem;
    }

    .search-input-wrapper {
      position: relative;
      max-width: 400px;
    }

    .search-input {
      width: 100%;
      padding: 0.75rem 3rem 0.75rem 2.5rem;
      border: 2px solid #e5e7eb;
      border-radius: 50px;
      font-size: 1rem;
      background: white;
      transition: all 0.3s ease;
    }

    .search-input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .search-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #6b7280;
      pointer-events: none;
    }

    .clear-search {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #6b7280;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .clear-search:hover {
      background: #f3f4f6;
      color: #374151;
    }

    .search-info {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: #6b7280;
    }

    @media (max-width: 768px) {
      .search-input-wrapper {
        max-width: none;
      }
    }
  `]
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchTerm = '';
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      this.productService.setSearchTerm(term);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.searchSubject.next(this.searchTerm);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.searchSubject.next('');
  }
}