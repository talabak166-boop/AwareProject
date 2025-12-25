# Aware Programming

## Overview

Aware Programming is a professional business website for a Danish programming and consulting company founded in 2018. The application is a full-stack web application built with React frontend and Express backend, featuring a contact form that stores messages in a PostgreSQL database. The site showcases the company's services including custom programming, business consulting, team training, and innovation services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom gold color palette and animations
- **Component Structure**: Single-page application with section-based layout (Header, Hero, About, Services, Contact, Footer)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: tsx for TypeScript execution
- **Build Output**: esbuild bundles server to CommonJS format for production
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Middleware**: JSON body parsing, request logging for API calls

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Pattern**: Repository pattern with `DatabaseStorage` class implementing `IStorage` interface

### Development vs Production
- Development: Vite dev server with HMR, integrated with Express middleware
- Production: Static files served from `dist/public/`, bundled server at `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **Driver**: pg (node-postgres) connection pool

### Key Libraries
- **drizzle-orm**: Database ORM for type-safe queries
- **drizzle-kit**: Database migration and schema push tooling
- **zod**: Runtime validation for API inputs
- **lucide-react**: Icon library for UI components

### Build Tools
- **Vite**: Frontend bundling and development server
- **esbuild**: Server-side bundling for production
- **PostCSS/Autoprefixer**: CSS processing for Tailwind