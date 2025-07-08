# Portfolio Website - Replit Configuration

## Overview

This is a full-stack portfolio website for Vikash Mishra, an M.Tech Cybersecurity student at IIT Delhi. The application is built as a single-page application (SPA) with a React frontend and Express.js backend, featuring a modern design with shadcn/ui components and PostgreSQL database integration through Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot module replacement with Vite integration

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configurations
├── server/                # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database abstraction layer
│   └── vite.ts           # Development server setup
├── shared/                # Shared code between client and server
│   └── schema.ts         # Database schema definitions
└── migrations/           # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Validation**: Zod schemas for runtime type validation
- **Type Safety**: Full TypeScript integration with Drizzle ORM

### UI Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Complete shadcn/ui component set including:
  - Navigation and layout components
  - Form controls and data display
  - Interactive elements (modals, tooltips, etc.)
  - Charts and data visualization

### Portfolio Sections
- **Hero Section**: Introduction with background imagery
- **About Section**: Personal journey and achievements
- **Skills Section**: Technical competencies categorized by domain
- **Education Section**: Academic background and certifications
- **Projects Section**: Research and development work
- **Contact Section**: Professional contact information

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js handles HTTP requests and routing
3. **Storage Layer**: Memory-based storage with database interface for easy migration
4. **Database Operations**: Drizzle ORM provides type-safe database interactions
5. **Response Handling**: Structured error handling and logging middleware

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **class-variance-authority**: Component variant management

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution environment

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- Memory-based storage for rapid prototyping
- Express middleware integration for seamless development

### Production Build
- Client: Vite builds optimized React bundle
- Server: esbuild creates Node.js compatible bundle
- Database: PostgreSQL with connection pooling via Neon

### Configuration Requirements
- `DATABASE_URL`: PostgreSQL connection string
- Environment-specific settings for development vs production
- Static asset serving for the built React application

## Changelog

Changelog:
- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.