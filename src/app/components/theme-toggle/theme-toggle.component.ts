import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleTheme()" 
      class="theme-toggle"
      [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      title="{{ isDarkMode ? 'Switch to light mode' : 'Switch to dark mode' }}">
      <div class="toggle-container">
        <div class="toggle-icon sun-icon" [class.active]="!isDarkMode">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        </div>
        <div class="toggle-switch" [class.dark]="isDarkMode">
          <div class="toggle-slider"></div>
        </div>
        <div class="toggle-icon moon-icon" [class.active]="isDarkMode">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
      </div>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .theme-toggle:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    :host-context(.dark) .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .toggle-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .toggle-icon {
      color: #9ca3af;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .toggle-icon.active {
      color: #2563eb;
      transform: scale(1.1);
    }

    :host-context(.dark) .toggle-icon.active {
      color: #fbbf24;
    }

    .toggle-switch {
      position: relative;
      width: 44px;
      height: 24px;
      background: #e5e7eb;
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .toggle-switch.dark {
      background: #374151;
    }

    .toggle-slider {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .toggle-switch.dark .toggle-slider {
      transform: translateX(20px);
      background: #fbbf24;
    }

    @media (max-width: 768px) {
      .toggle-container {
        gap: 0.25rem;
      }

      .toggle-switch {
        width: 36px;
        height: 20px;
      }

      .toggle-slider {
        width: 16px;
        height: 16px;
      }

      .toggle-switch.dark .toggle-slider {
        transform: translateX(16px);
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  private destroy$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode
      .pipe(takeUntil(this.destroy$))
      .subscribe(isDark => {
        this.isDarkMode = isDark;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}