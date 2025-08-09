# ShopNext - Dynamic Product Showcase

A modern, responsive Angular e-commerce application showcasing electronic gadgets, apparel, and home accessories.

## 🚀 Features

### Core Components
- **NavbarComponent**: Responsive navigation with mobile menu
- **ProductCardComponent**: Reusable product display cards with ratings and actions
- **FilterSidebarComponent**: Advanced filtering with category, price range, and stock status
- **SearchBarComponent**: Real-time search with debouncing
- **FooterComponent**: Company information and newsletter signup
- **CarouselComponent**: Featured products slideshow with auto-play
- **ContactFormComponent**: Comprehensive contact form with validation

### Pages
- **Home**: Hero section, featured products carousel, category showcase
- **Products**: Product grid with search and filtering capabilities
- **Product Details**: Individual product view with quantity controls
- **About**: Company story, mission, values, and team
- **Contact**: Contact information and inquiry form

### Technical Implementation
- **Component Architecture**: Modular, reusable components with clear separation of concerns
- **Data Flow**: @Input/@Output for parent-child communication, services with RxJS Observables
- **State Management**: ProductService managing products, search, and filters with BehaviorSubjects
- **Reactive Forms**: Form validation with custom error handling and ViewChild for focus management
- **Angular Features**: 
  - Directives: ngIf, ngFor, ngClass, ngStyle
  - Pipes: titlecase, async
  - Router: Navigation with ActivatedRoute for dynamic routes
  - ViewChild/ElementRef: DOM manipulation for carousel and form focus
  - trackBy functions for performance optimization

### Design & UX
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Clean, professional design with consistent color system
- **Accessibility**: Proper semantic HTML, focus management, and ARIA labels
- **Performance**: Optimized images, lazy loading, and efficient change detection

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navbar/
│   │   ├── product-card/
│   │   ├── filter-sidebar/
│   │   ├── search-bar/
│   │   ├── carousel/
│   │   ├── footer/
│   │   └── contact-form/
│   ├── pages/              # Route components
│   │   ├── home/
│   │   ├── products/
│   │   ├── product-details/
│   │   ├── about/
│   │   └── contact/
│   ├── services/           # Data services
│   │   └── product.service.ts
│   ├── models/            # TypeScript interfaces
│   │   └── product.model.ts
│   └── app.routes.ts      # Application routing
├── index.html
├── main.ts
└── global_styles.css
```

## 🛠 Technologies Used

- **Angular 20**: Latest version with standalone components
- **TypeScript**: Strong typing and modern ES features
- **RxJS**: Reactive programming with Observables
- **CSS3**: Modern styling with Flexbox and Grid
- **Responsive Design**: Mobile-first approach

## 🏃‍♂️ Running the Application

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:4200`

## 🎯 Key Angular Features Demonstrated

### Component Communication
- Parent-child communication using @Input and @Output
- Service-based state management with RxJS
- Event handling and data binding

### Forms & Validation
- Reactive Forms with FormBuilder
- Custom validation and error handling
- ViewChild for DOM interaction and focus management

### Routing
- Route configuration with lazy loading capability
- ActivatedRoute for parameter handling
- Router navigation methods

### Performance Optimization
- trackBy functions in *ngFor loops
- OnPush change detection strategy ready
- Efficient Observable patterns

### Modern Angular Patterns
- Standalone components (Angular 14+)
- Typed reactive forms
- Signal-ready architecture
- Modern lifecycle hooks

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- Primary: #2563eb (Blue)
- Secondary: #f97316 (Orange)  
- Success: #059669 (Green)
- Warning: #f59e0b (Amber)
- Error: #dc2626 (Red)
- Neutral: Grays from #f9fafb to #1f2937

### Typography
- Font Family: Inter, system fonts
- Headings: 600 weight, 120% line-height
- Body: 400 weight, 150% line-height

## 📈 Performance Features

- Lazy loading components
- Efficient change detection
- Optimized bundle size
- Image optimization
- debounceTime for search inputs

## 🔧 Development Commands

```bash
# Development
npm start              # Start dev server
npm run build         # Build for production
npm run build --watch # Build and watch for changes

# Code Quality
npm run lint          # Run ESLint
npm run format        # Format code
```

This application demonstrates modern Angular development practices with a focus on component reusability, performance, and user experience.