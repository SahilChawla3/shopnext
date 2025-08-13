import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <div class="hero-section">
        <div class="hero-content">
          <h1>About ShopNext</h1>
          <p class="hero-subtitle">
            Revolutionizing the online shopping experience with quality products and exceptional service.
          </p>
        </div>
      </div>

      <div class="content-container">
        <section class="story-section">
          <div class="section-content">
            <div class="text-content">
              <ng-container>
                <h2>Our Story</h2>
                <p>
                  Founded in 2020, ShopNext began with a simple vision: to create an online shopping destination 
                  that combines the best products with an exceptional customer experience. What started as a small 
                  team of passionate entrepreneurs has grown into a trusted platform serving thousands of customers worldwide.
                </p>
                <p>
                  We believe that shopping online should be more than just a transaction—it should be an experience 
                  that delights and inspires. That's why we've carefully curated our product selection, focusing on 
                  quality, innovation, and value.
                </p>
              </ng-container>
            </div>
            <div class="image-content">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Our team at work" />
            </div>
          </div>
        </section>

        <section class="mission-section">
          <div class="section-header">
            <h2>Our Mission</h2>
            <p>We're committed to making quality products accessible to everyone</p>
          </div>
          
          <div class="mission-grid">
            <div class="mission-card">
              <div class="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3>Quality First</h3>
              <p>Every product in our catalog is carefully selected and tested to meet our high standards for quality and durability.</p>
            </div>

            <div class="mission-card">
              <div class="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Customer Focused</h3>
              <p>Our customers are at the heart of everything we do. We listen, we care, and we're always here to help.</p>
            </div>

            <div class="mission-card">
              <div class="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We're constantly evolving our platform and processes to provide you with the best possible shopping experience.</p>
            </div>
          </div>
        </section>

        <section class="values-section">
          <div class="section-content reverse">
            <div class="image-content">
              <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="Quality products" />
            </div>
            <div class="text-content">
              <h2>Our Values</h2>
              <div class="values-list">
                <div class="value-item">
                  <h4>Transparency</h4>
                  <p>We believe in honest communication and clear pricing with no hidden fees.</p>
                </div>
                <div class="value-item">
                  <h4>Sustainability</h4>
                  <p>We're committed to environmental responsibility in our operations and product selection.</p>
                </div>
                <div class="value-item">
                  <h4>Community</h4>
                  <p>We support local communities and give back through various charitable initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="team-section">
          <div class="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind ShopNext</p>
          </div>

          <div class="team-grid">
            <div class="team-member">
              <div class="member-image">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                     alt="Sarah Johnson, CEO" />
              </div>
              <div class="member-info">
                <h3>Sarah Johnson</h3>
                <p class="role">Chief Executive Officer</p>
                <p class="bio">Sarah founded ShopNext with a vision to revolutionize online shopping. With over 10 years of e-commerce experience, she leads our team with passion and innovation.</p>
              </div>
            </div>

            <div class="team-member">
              <div class="member-image">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300" 
                     alt="Michael Chen, CTO" />
              </div>
              <div class="member-info">
                <h3>Michael Chen</h3>
                <p class="role">Chief Technology Officer</p>
                <p class="bio">Michael ensures our platform runs smoothly and securely. His expertise in web technologies helps us deliver the best possible user experience.</p>
              </div>
            </div>

            <div class="team-member">
              <div class="member-image">
                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300" 
                     alt="Emma Rodriguez, Head of Customer Success" />
              </div>
              <div class="member-info">
                <h3>Emma Rodriguez</h3>
                <p class="role">Head of Customer Success</p>
                <p class="bio">Emma leads our customer support team, ensuring every customer has an amazing experience with ShopNext from browsing to delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <div class="cta-content">
            <h2>Ready to Experience ShopNext?</h2>
            <p>Join thousands of satisfied customers who have made ShopNext their go-to shopping destination.</p>
            <div class="cta-buttons">
              <button routerLink="/products" class="btn btn-primary">Shop Now</button>
              <button routerLink="/contact" class="btn btn-secondary">Get in Touch</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
      min-height: 100vh;
      background: var(--bg-secondary);
      transition: background-color 0.3s ease;
    }

    .hero-section {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
      padding: 6rem 0 4rem;
      text-align: center;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin: 0 0 1.5rem 0;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin: 0;
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .content-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .story-section,
    .values-section {
      padding: 4rem 0;
    }

    .section-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .section-content.reverse {
      grid-template-columns: 1fr 1fr;
    }

    .text-content h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 2rem 0;
    }

    .text-content p {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .image-content img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
    }

    .mission-section,
    .team-section {
      padding: 4rem 0;
      background: var(--bg-secondary);
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

    .mission-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .mission-card {
      background: var(--bg-primary);
      padding: 2.5rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 6px var(--shadow-light);
      transition: transform 0.3s ease;
    }

    .mission-card:hover {
      transform: translateY(-4px);
    }

    .mission-icon {
      color: var(--accent-blue);
      margin-bottom: 1.5rem;
    }

    .mission-card h3 {
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 1rem 0;
    }

    .mission-card p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    .values-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .value-item h4 {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 0.5rem 0;
    }

    .value-item p {
      margin: 0;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .team-member {
      background: var(--bg-primary);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px var(--shadow-light);
      transition: transform 0.3s ease;
    }

    .team-member:hover {
      transform: translateY(-4px);
    }

    .member-image img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .member-info {
      padding: 2rem;
    }

    .member-info h3 {
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--text-primary);
      margin: 0 0 0.5rem 0;
    }

    .role {
      color: var(--accent-blue);
      font-weight: 600;
      margin: 0 0 1rem 0;
    }

    .bio {
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    .cta-section {
      padding: 4rem 0;
      background: linear-gradient(135deg, #1f2937, #111827);
      color: white;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 0 1rem 0;
    }

    .cta-content p {
      font-size: 1.1rem;
      margin: 0 0 2rem 0;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
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
    }

    .btn-primary {
      background: var(--accent-blue);
      color: white;
    }

    .btn-primary:hover {
      background: var(--accent-blue-hover);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background: white;
      color: var(--text-primary);
    }

    @media (max-width: 1024px) {
      .section-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }

      .text-content h2 {
        font-size: 2rem;
      }
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .mission-grid,
      .team-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 200px;
      }

      .story-section,
      .values-section,
      .mission-section,
      .team-section {
        padding: 3rem 0;
      }
    }
  `]
})
export class AboutComponent {
  // Component logic would go here if needed
}