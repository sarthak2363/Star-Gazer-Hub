# Axploration - Cosmic Experiences Platform

## Overview

Axploration is a full-stack web application for AXCamps (Axploration Camps), a division of AXSX – Aeronautics & Space Exploration. The platform provides booking and information services for astronomy-related experiences including stargazing events, astrotourism, aeromodelling workshops, and educational programs for schools and corporate clients.

The application is built as a React frontend with an Express backend, using PostgreSQL for data persistence. It follows a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Build**: esbuild for production bundling

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows swapping between in-memory and database implementations

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data access layer
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations
```

### Key Design Patterns
- **Shared Schema**: Database schema defined once in `shared/` and used by both frontend (for type safety) and backend (for database operations)
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared code, `@assets/` maps to attached assets
- **Development/Production Split**: Vite dev server in development, static file serving in production

## External Dependencies

### Database
- **PostgreSQL**: Primary database, configured via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions

### UI Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **Embla Carousel**: Image carousels with autoplay
- **React Day Picker**: Date selection for event calendars
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **Drizzle Kit**: Database migrations via `db:push` command

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator

### Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation
- **Zod**: Schema validation library