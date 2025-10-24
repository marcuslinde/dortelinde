# Source Code Structure

This project follows a standard React + Vite structure with TypeScript:

```
src/
├── components/     # Reusable React components
│   ├── ui/        # UI components (buttons, cards, etc.)
│   └── figma/     # Figma-specific components
├── App.tsx        # Main App component
├── index.css      # Global styles
└── main.tsx       # Application entry point
```

## Key Patterns

- All components are TypeScript React components (.tsx)
- Path aliases configured (`@/` points to src/)
- CSS uses Tailwind with PostCSS
- Components follow atomic design principles

## Environment Variables

Environment variables are typed in `env.d.ts`. Add new ones there when needed.

## Component Guidelines

1. Use TypeScript for all components
2. Follow atomic design principles
3. Keep components small and focused
4. Use shadcn/ui components from the ui/ folder
5. Style with Tailwind CSS classes