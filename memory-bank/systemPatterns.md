# System Patterns

## System Architecture

### Next.js App Router Pattern
- Uses Next.js 16+ App Router for routing and page organization
- File-based routing with `app/` directory structure
- Server components for optimal performance and SEO
- Client components only when interactive features are required

### VetMedPro Component Hierarchy
```
app/
├── layout.tsx (Root layout with veterinary metadata and global--vet-primary styling)
├── page.tsx (Comprehensive veterinary medicine homepage)
├── globals.css (Veterinary medicine color scheme and custom properties)
memory-bank/
├── projectbrief.md (VetMedPro project overview)
├── productContext.md (Veterinary medicine business context)
├── systemPatterns.md (Application architecture patterns)
├── techContext.md (Technology stack and setup)
├── activeContext.md (Current development focus)
├── progress.md (Implementation status and achievements)
└── uiux.md (Comprehensive design system documentation)
```

## Key Technical Decisions

### Styling Architecture
- Tailwind CSS v4 as the primary styling system
- Custom CSS variables for theme colors (`--background`, `--foreground`)
- CSS-in-JS approach using Tailwind utility classes
- Dark mode implementation via `prefers-color-scheme` media query
- Inline theme definition using `@theme` directive

### Font Management
- Next.js font optimization with `next/font/google`
- Geist Sans and Geist Mono font families
- CSS custom properties for font variables (`--font-geist-sans`, `--font-geist-mono`)
- Font subsets limited to Latin for optimization

### TypeScript Configuration
- Strict TypeScript configuration
- Type definitions for React and Node.js included
- Metadata typing for Next.js SEO features

## Design Patterns

### Veterinary Medicine UI Architecture
- Professional medical aesthetics with trust-building design elements
- Emergency access prioritized throughout user interface
- Multi-segment user experience for pet owners, farmers, and professionals
- Vietnamese language optimization for local market penetration

### Component Composition
- Large-scale single-page application with sectioned content architecture
- Veterinary product categorization by animal type and condition
- Professional consultation interfaces with multiple contact methods
- Educational blog system with veterinary expert content

### Professional Branding Patterns
- Medical authority established through consistent veterinary color schemes
- GMP certification and professional credentials prominently displayed
- Emergency hotline (1900 XXX XXX) featured in header and footer
- Trust indicators and quality badges for product assurance

### Veterinary Service Flows
- **Product Discovery → Consultation**: Browse medicines → Contact veterinary experts
- **Emergency Access**: Header hotline → Multiple contact options (call, chat, visit)
- **Educational Journey**: Read blog → Expertise building → Professional consultation
- **Service Booking**: Contact forms → Appointment scheduling → Service delivery

### Mobile-First Veterinary Experience
- Touch-optimized interfaces with 44px minimum touch targets
- Emergency contact information available without scrolling
- Vietnamese language optimized for local mobile usage
- Progressive Web App ready for offline emergency access

### Layout Patterns
- Hero section with gradient veterinary-themed backgrounds
- Card-based grid layouts for products, services, and blog content
- Sticky navigation with active section highlighting
- Emergency contact prioritized in mobile menu

### Trust and Authority Patterns
- Professional veterinary credentials (Dr. titles, certifications)
- Medical color scheme (professional blues, greens for health)
- Quality assurance badges and regulatory compliance indicators
- Expert-written content with publication dates and author credentials

## Component Relationships

### Root Layout (layout.tsx)
- Provides metadata and global font setup
- Wraps all pages with consistent HTML structure
- Passes font CSS variables to body element

### Home Page (page.tsx)
- Main landing component with hero content
- Uses imported components from Next.js
- Implements responsive grid layout
- Handles external links with proper security attributes

### Global Styles (globals.css)
- Defines CSS custom properties for theming
- Imports Tailwind CSS v4
- Sets up font family and color scheme support
- Provides base body styling

## Critical Implementation Paths

### Development Workflow
1. `npm run dev` starts development server on localhost:3000
2. Hot reload enabled for instant feedback
3. ESLint for code quality enforcement
4. TypeScript checking during development

### Build Process
1. `npm run build` compiles for production
2. Static generation for performance
3. Font optimization and image processing
4. Bundle analysis and minification

### Runtime Patterns
- Server-side rendering by default
- Client-side navigation with App Router
- Optimized loading states for better UX
- Error boundaries can be added for resilience

## Performance Considerations
- Next.js automatic image optimization
- Font subsetting and preloading
- Minimal JavaScript bundle through server components
- CSS optimization with Tailwind's purging
- Static asset caching headers

This architecture provides a solid foundation that's both performant and maintainable, following Next.js best practices while remaining flexible for future enhancements.
