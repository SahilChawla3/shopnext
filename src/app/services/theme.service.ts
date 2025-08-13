import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode$ = new BehaviorSubject<boolean>(false);

  constructor() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.setDarkMode(isDark);
  }

  get isDarkMode() {
    return this.isDarkMode$.asObservable();
  }

  get currentTheme() {
    return this.isDarkMode$.value;
  }

  toggleDarkMode(): void {
    this.setDarkMode(!this.isDarkMode$.value);
  }

  setDarkMode(isDark: boolean): void {
    this.isDarkMode$.next(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}