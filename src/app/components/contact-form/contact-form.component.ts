import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-form-container">
      <div class="form-header">
        <h2>Get in Touch</h2>
        <p>Have a question or need help? We'd love to hear from you.</p>
      </div>

      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="firstName" class="form-label">First Name *</label>
            <input 
              #firstNameInput
              type="text" 
              id="firstName"
              formControlName="firstName"
              class="form-input"
              [class.error]="isFieldInvalid('firstName')"
              placeholder="Enter your first name">
            <div *ngIf="isFieldInvalid('firstName')" class="error-message">
              <span *ngIf="contactForm.get('firstName')?.errors?.['required']">First name is required</span>
              <span *ngIf="contactForm.get('firstName')?.errors?.['minlength']">First name must be at least 2 characters</span>
            </div>
          </div>

          <div class="form-group">
            <label for="lastName" class="form-label">Last Name *</label>
            <input 
              type="text" 
              id="lastName"
              formControlName="lastName"
              class="form-input"
              [class.error]="isFieldInvalid('lastName')"
              placeholder="Enter your last name">
            <div *ngIf="isFieldInvalid('lastName')" class="error-message">
              <span *ngIf="contactForm.get('lastName')?.errors?.['required']">Last name is required</span>
              <span *ngIf="contactForm.get('lastName')?.errors?.['minlength']">Last name must be at least 2 characters</span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email Address *</label>
          <input 
            type="email" 
            id="email"
            formControlName="email"
            class="form-input"
            [class.error]="isFieldInvalid('email')"
            placeholder="Enter your email address">
          <div *ngIf="isFieldInvalid('email')" class="error-message">
            <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
            <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email address</span>
          </div>
        </div>

        <div class="form-group">
          <label for="phone" class="form-label">Phone Number</label>
          <input 
            type="tel" 
            id="phone"
            formControlName="phone"
            class="form-input"
            [class.error]="isFieldInvalid('phone')"
            placeholder="Enter your phone number">
          <div *ngIf="isFieldInvalid('phone')" class="error-message">
            <span *ngIf="contactForm.get('phone')?.errors?.['pattern']">Please enter a valid phone number</span>
          </div>
        </div>

        <div class="form-group">
          <label for="subject" class="form-label">Subject *</label>
          <select 
            id="subject"
            formControlName="subject"
            class="form-select"
            [class.error]="isFieldInvalid('subject')">
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <div *ngIf="isFieldInvalid('subject')" class="error-message">
            <span *ngIf="contactForm.get('subject')?.errors?.['required']">Please select a subject</span>
          </div>
        </div>

        <div class="form-group">
          <label for="message" class="form-label">Message *</label>
          <textarea 
            id="message"
            formControlName="message"
            rows="5"
            class="form-textarea"
            [class.error]="isFieldInvalid('message')"
            placeholder="Enter your message here..."></textarea>
          <div *ngIf="isFieldInvalid('message')" class="error-message">
            <span *ngIf="contactForm.get('message')?.errors?.['required']">Message is required</span>
            <span *ngIf="contactForm.get('message')?.errors?.['minlength']">Message must be at least 10 characters</span>
          </div>
        </div>

        <div class="form-group">
          <label class="checkbox-label">
            <input 
              type="checkbox" 
              formControlName="newsletter"
              class="form-checkbox">
            <span class="checkmark"></span>
            Subscribe to our newsletter for updates and offers
          </label>
        </div>

        <div class="form-actions">
          <button 
            type="button" 
            (click)="resetForm()" 
            class="btn btn-secondary">
            Reset
          </button>
          <button 
            type="submit" 
            class="btn btn-primary"
            [disabled]="contactForm.invalid || isSubmitting">
            <span *ngIf="isSubmitting" class="spinner"></span>
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>

      <div *ngIf="submitMessage" class="submit-message" 
           [ngClass]="{'success': submitSuccess, 'error': !submitSuccess}">
        {{ submitMessage }}
      </div>
    </div>
  `,
  styles: [`
    .contact-form-container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .form-header {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: white;
      padding: 2rem;
      text-align: center;
    }

    .form-header h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.75rem;
    }

    .form-header p {
      margin: 0;
      opacity: 0.9;
    }

    .contact-form {
      padding: 2rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .form-input,
    .form-select,
    .form-textarea {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .form-input.error,
    .form-select.error,
    .form-textarea.error {
      border-color: #dc2626;
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      font-size: 0.9rem;
      color: #6b7280;
      gap: 0.5rem;
    }

    .form-checkbox {
      margin: 0;
    }

    .error-message {
      color: #dc2626;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #e5e7eb;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 120px;
      justify-content: center;
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-primary {
      background: #2563eb;
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: #1d4ed8;
    }

    .btn-secondary {
      background: #f3f4f6;
      color: #374151;
    }

    .btn-secondary:hover {
      background: #e5e7eb;
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .submit-message {
      margin: 1rem 2rem 2rem;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      font-weight: 500;
    }

    .submit-message.success {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #10b981;
    }

    .submit-message.error {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #dc2626;
    }

    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }

      .form-actions {
        flex-direction: column;
      }

      .contact-form-container {
        margin: 1rem;
      }
    }
  `]
})
export class ContactFormComponent implements AfterViewInit {
  @ViewChild('firstNameInput') firstNameInput!: ElementRef;

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[\+]?[1-9][\d]{0,15}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [false]
    });
  }

  ngAfterViewInit(): void {
    // Focus on first invalid field when form is invalid
    this.contactForm.statusChanges.subscribe(status => {
      if (status === 'INVALID' && this.contactForm.dirty) {
        this.focusFirstInvalidField();
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  focusFirstInvalidField(): void {
    const firstInvalidField = Object.keys(this.contactForm.controls)
      .find(key => this.isFieldInvalid(key));

    if (firstInvalidField) {
      const element = document.getElementById(firstInvalidField);
      if (element) {
        element.focus();
      }
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Thank you for your message! We\'ll get back to you soon.';
        this.resetForm();
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      this.focusFirstInvalidField();
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitMessage = '';
    this.submitSuccess = false;
  }
}