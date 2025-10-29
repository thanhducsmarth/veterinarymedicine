# Technical Context

## Core Technologies

### Frontend Framework
- **Next.js 16.0.1**: Latest version with App Router for modern routing and performance
- **React 19.2.0**: Latest version with concurrent features and improved performance
- **TypeScript 5**: Strict typing with modern language features

### Styling System
- **Tailwind CSS v4**: Next generation utility-first CSS framework
- **PostCSS**: CSS processing with Tailwind integration
- Custom CSS variables for theme customization

### Development Tools
- **ESLint 9**: Code linting with Next.js configuration
- **npm**: Package management and script execution
- **Git**: Version control with standard workflows

## Development Setup

### Project Structure
```
my-theme/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles and Tailwind config
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── public/                 # Static assets (SVGs, favicon)
├── memory-bank/            # Project documentation
├── package.json            # Dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tailwind.config.*       # Tailwind configuration (v4)
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS setup
└── eslint.config.mjs       # ESLint configuration
```

### Environment Requirements
- **Node.js**: Latest LTS version (project created with modern versions)
- **npm**: Included with Node.js for dependency management
- **Browser**: Modern browsers with CSS custom properties support
- **Language**: Vietnamese localization with UTF-8 encoding support

### Package Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Production build for veterinary medicine deployment
- `npm run start`: Start production server for VetMedPro platform
- `npm run lint`: Run ESLint for code quality enforcement

## Technical Constraints

### Browser Compatibility
- CSS custom properties required for theme system
- Modern flexbox and grid support for layouts
- ES6+ JavaScript features supported
- CSS-in-JS patterns through Tailwind utilities

### Performance Limits
- Bundle size optimization through Next.js and Tailwind purging
- Image optimization limited to Next.js Image component
- Font loading optimized but subset limited to Latin

### Framework Limitations
- App Router restricts some Pages Router patterns
- Tailwind v4 requires specific PostCSS configuration
- TypeScript strict mode may require type declarations

## Dependencies Analysis

### Production Dependencies
- `next`: ^16.0.1 - Core framework with App Router
- `react`: 19.2.0 - UI library with concurrent features
- `react-dom`: 19.2.0 - React DOM rendering

### Development Dependencies
- `typescript`: ^5 - Type checking and compilation
- `@types/node`: ^20 - Node.js type definitions
- `@types/react`: ^19 - React type definitions
- `@types/react-dom`: ^19 - React DOM type definitions
- `@tailwindcss/postcss`: ^4 - Tailwind CSS v4 PostCSS plugin
- `tailwindcss`: ^4 - CSS framework v4
- `eslint`: ^9 - Code linting
- `eslint-config-next`: 16.0.1 - Next.js ESLint config

## Tool Usage Patterns

### Development Workflow
1. **Project Initialization**: `npm install` to set up dependencies
2. **Development**: `npm run dev` for local development with auto-refresh
3. **Code Quality**: ESLint runs automatically during development
4. **Type Checking**: TypeScript compilation errors shown in IDE

### Build and Deployment
1. **Production Build**: `npm run build` creates optimized bundle
2. **Static Export**: Ready for deployment on platforms like Vercel
3. **Vercel Deployment**: Recommended deployment target for Next.js

### Version Control
- `.gitignore` excludes `node_modules`, `.next`, and build artifacts
- Git commit messages should follow conventional format
- Feature branches for new developments

### Code Quality Tools
- **ESLint**: Enforces Next.js coding standards
- **TypeScript**: Ensures type safety and catches errors early
- **Prettier**: Can be integrated for consistent formatting

## Configuration Files

### Next.js Config (next.config.ts)
- Empty config using latest TypeScript setup
- Extensible for future customizations (images, redirects, etc.)

### TypeScript Config (tsconfig.json)
- Strict configuration with ESNext target
- Path mapping for clean imports
- Module resolution for modern JavaScript

### ESLint Config (eslint.config.mjs)
- Flat config format for ESLint 9
- Next.js recommended rules
- TypeScript integration

This technical foundation provides a robust, modern development environment while maintaining simplicity and performance.
