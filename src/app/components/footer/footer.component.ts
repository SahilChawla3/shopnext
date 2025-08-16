import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">ShopNext</h3>
            <p class="footer-description">
              Your premier destination for electronic gadgets, quality apparel, and stylish home accessories.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a routerLink="/" class="footer-link">Home</a></li>
              <li><a routerLink="/products" class="footer-link">Products</a></li>
              <li><a routerLink="/about" class="footer-link">About Us</a></li>
              <li><a routerLink="/contact" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Categories</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Electronics</a></li>
              <li><a href="#" class="footer-link">Apparel</a></li>
              <li><a href="#" class="footer-link">Home & Garden</a></li>
              <li><a href="#" class="footer-link">Accessories</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Customer Service</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Help Center</a></li>
              <li><a href="#" class="footer-link">Shipping Info</a></li>
              <li><a href="#" class="footer-link">Returns</a></li>
              <li><a href="#" class="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Newsletter</h4>
            <p class="newsletter-text">Subscribe to get updates on new products and offers.</p>
            <form class="newsletter-form" (submit)="subscribeNewsletter($event)">
              <input 
                type="email" 
                placeholder="Enter your email"
                class="newsletter-input"
                required>
              <button type="submit" class="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2024 ShopNext. All rights reserved.</p>
            <div class="footer-bottom-links">
              <a href="#" class="footer-link">Terms of Service</a>
              <a href="#" class="footer-link">Privacy Policy</a>
              <a href="#" class="footer-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      color: white;
      margin-top: auto;
      transition: background-color 0.3s ease;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 3rem 0;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--accent-blue);
      margin: 0 0 1rem 0;
    }

    .footer-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }

    .social-link:hover {
      color: var(--accent-blue);
    }

    .section-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: white;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-link {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-link:hover {
      color: var(--text-primary);
    }

    .newsletter-text {
      color: var(--text-secondary);
      margin: 0 0 1rem 0;
      font-size: 0.9rem;
    }

    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
    }

    .newsletter-input {
      padding: 0.75rem;
      border: 1px solid var(--border-primary);
      background: var(--bg-tertiary);
      color: white;
      border-radius: 6px;
      font-size: 0.9rem;
    }

    .newsletter-input:focus {
      outline: none;
      border-color: var(--accent-blue);
    }

    .newsletter-input::placeholder {
      color: var(--text-tertiary);
    }

    .newsletter-btn {
      padding: 0.75rem 1rem;
      background: var(--accent-blue);
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .newsletter-btn:hover {
      background: var(--accent-blue-hover);
    }

    .footer-bottom {
      border-top: 1px solid var(--border-primary);
      padding: 1.5rem 0;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-bottom-content p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem 0;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .footer-bottom-links {
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  subscribeNewsletter(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement;
    
    if (input.value) {
      console.log('Newsletter subscription:', input.value);
      input.value = '';
      // In a real app, this would integrate with an email service
    }
  }
}