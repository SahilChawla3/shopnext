import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <a routerLink="/" class="logo-text">ShopNext</a>
        </div>
        <ul class="nav-menu" [class.active]="isMenuOpen">
          <li class="nav-item">
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a routerLink="/products" routerLinkActive="active" class="nav-link"
              >Products</a
            >
          </li>
          <li class="nav-item">
            <a routerLink="/about" routerLinkActive="active" class="nav-link"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a routerLink="/contact" routerLinkActive="active" class="nav-link"
              >Contact</a
            >
          </li>
        </ul>
        <div class="nav-actions">
          <app-theme-toggle></app-theme-toggle>
        </div>
        <div class="nav-hamburger" (click)="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        // background: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
      }

      .nav-actions {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: 1rem;
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2563eb;
        text-decoration: none;
        transition: color 0.3s ease;
        margin-right: 30px;
      }

      .logo-text:hover {
        color: #1d4ed8;
      }

      .nav-menu {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 2rem;
      }

      .nav-link {
        text-decoration: none;
        color: #4b5563;
        font-weight: 500;
        transition: color 0.3s ease;
        position: relative;
      }

      .nav-link:hover,
      .nav-link.active {
        color: #2563eb;
      }

      .nav-link.active::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #2563eb;
      }

      .nav-hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
      }

      .bar {
        width: 25px;
        height: 3px;
        background-color: #4b5563;
        margin: 3px 0;
        transition: 0.3s;
      }

      @media (max-width: 768px) {
        .nav-actions {
          margin-right: 0.5rem;
        }

        .nav-menu {
          position: fixed;
          left: -100%;
          top: 4rem;
          flex-direction: column;
          background-color: white;
          width: 100%;
          text-align: center;
          transition: 0.3s;
          box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
          padding: 2rem 0;
        }

        :host-context(.dark) .nav-menu {
          background-color: #1f2937; /* Dark gray */
        }

        .nav-menu.active {
          left: 0;
        }

        .nav-hamburger {
          display: flex;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
