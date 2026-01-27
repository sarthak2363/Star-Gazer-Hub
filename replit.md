# Axploration - Cosmic Experiences Platform

## Overview

Axploration is a web application for an astrotourism and space exploration company (AXCamps/AXSX). The platform showcases stargazing events, astrotours, aeromodelling workshops, and cosmic experiences across India. It serves as a marketing and information hub for public events, corporate programs, and school educational activities related to astronomy and space science.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for page transitions and micro-interactions
- **UI Components**: Radix UI primitives wrapped with shadcn/ui styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware
- **Production**: Static file serving from compiled dist folder

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated via drizzle-zod
- **Storage Interface**: Abstracted storage layer (`server/storage.ts`) with in-memory implementation ready for database migration

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route-level page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── static.ts     # Production static file serving
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and types
└── attached_assets/  # Static images and media files
```

### Build System
- Development: `npm run dev` runs Express with Vite middleware
- Production build: Custom esbuild script bundles server, Vite builds client
- Database migrations: `npm run db:push` via Drizzle Kit

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migration and schema push tooling

### UI Component Libraries
- **shadcn/ui**: Pre-built accessible components (new-york style variant)
- **Radix UI**: Headless UI primitives for dialogs, dropdowns, tooltips, etc.
- **Lucide React**: Icon library

### Development Tools
- **Replit Plugins**: Dev banner, cartographer, runtime error overlay (development only)
- **PostCSS/Autoprefixer**: CSS processing pipeline

### Session Management
- **connect-pg-simple**: PostgreSQL session store (available in dependencies)
- **express-session**: Session middleware

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation

### Date/Calendar
- **date-fns**: Date manipulation utilities
- **react-day-picker**: Calendar component for event date selection