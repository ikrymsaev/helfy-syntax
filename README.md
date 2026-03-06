# Helfy Template Syntax

Syntax highlighting and snippets for the [Helfy](https://www.npmjs.com/package/@helfy/helfy) framework template directives in VS Code.

## Features

- **Syntax highlighting** for Helfy directives in TSX/TS:
  - Control flow: `@if`, `@elseif`, `@else`, `@for`, `@empty`
  - Slots: `@slot:name`, `@slot.name`
  - Bindings: `@ref`, `@bind`, `@bind:value`, `@field`
- **Snippets** for quick insertion of common patterns (prefixes: `@if`, `@for`, `@ref`, `hif`, `hfor`, etc.)
- **TypeScript plugin** integration (`@helfy/helfy-ts-plugin`) for better editor support

## Installation

1. Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/)
2. Or install the framework: `npm install @helfy/helfy`

## Supported Directives

| Directive    | Description                          |
|-------------|--------------------------------------|
| `@if`       | Conditional block                    |
| `@elseif`   | Else-if branch                       |
| `@else`     | Else branch                          |
| `@for`      | Loop with optional `track` and `@empty` |
| `@slot:name`| Slot provider with fallback          |
| `@slot.name`| Slot consumer override               |
| `@ref`      | DOM / component reference            |
| `@bind`     | Two-way binding (DOM)                |
| `@bind:value` | Two-way binding on component       |
| `@field`    | FieldState binding for forms         |

## Links

- [@helfy/helfy on npm](https://www.npmjs.com/package/@helfy/helfy)
- [GitHub](https://github.com/helfy/helfy-syntax)
