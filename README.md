# Rich Text Editor (Custom Implementation)

This project is a custom rich text editor built from scratch using React and TypeScript, without relying on existing editor frameworks (Quill, Slate, Lexical, etc.).

## Why this project
The goal was to understand and implement the core concepts behind modern text editors, including command-based editing, extensibility, accessibility, and collaboration.

## Key Features
- Custom editor surface with keyboard-first interaction
- Command-based formatting system (bold, italic, heading)
- Plugin architecture for extensibility
- Slash menu with full keyboard navigation
- Safe HTML paste sanitization
- Frontend-only collaboration simulation with deterministic convergence
- Accessibility-first design (ARIA roles, keyboard support)
- Component isolation and edge-case coverage using Storybook

## Live Demo (Storybook)
Public Storybook:
https://main--jeshwitha-rich-text-editor.chromatic.com

## Documentation
- Plugin API: `PLUGIN_API.md`
- Collaboration model: `COLLABORATION.md`
- Paste sanitization: `SANITIZATION.md`
- Accessibility report: `ACCESSIBILITY.md`

## Tech Stack
- React + TypeScript
- Vite
- Storybook + Chromatic
- Tailwind CSS

