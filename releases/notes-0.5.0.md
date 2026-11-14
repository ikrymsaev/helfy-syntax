Editor support for Helfy `.hf` templates in VS Code, Cursor and other VS Code based editors.

## Install

```bash
npx helfy-create --install-extension
```

Or download `helfy-vscode.vsix` below and run `code --install-extension helfy-vscode.vsix`
(or Extensions → … → Install from VSIX). Reload the editor window afterwards.
The installer command downloads the latest published VSIX; use the attached file to install
this version before it becomes the latest GitHub release.

## What's new in 0.5.0

- Type checking for `@field(expr)` against `FieldState`, with errors on the original `.hf` expression.
- Type checking for `@ref(this.field)` against the expected DOM element or component instance.
- Fixed relative imports inside named `@template` blocks: type checking, hover, go-to-definition and rename resolve imports from the template file's directory.
- Shared import resolution for `tsconfig.paths` and `package.json#imports`, including external package targets, aligned with the framework compiler and `helfy-check`.
- Updated bundled language server, import resolver and template parser; no separate server installation required.

Translation-key completion, catalog hover/definitions/diagnostics, native Markdown and nested CSS highlighting from 0.4.0 remain available.

Use with `@helfy/helfy@0.10.0` and `@helfy/helfy-lint@0.7.0` for the matching framework and lint release. The framework and linter are installed separately through npm.

## Features

- Highlighting of markup, directives, expressions and scoped/global styles, including nested CSS
- Native Markdown highlighting and navigation in `.hf` templates
- Type checking of template and style expressions against the component class
- Hover, go-to-definition and completion, including translation keys
- Template syntax errors and formatting

## Upgrading from helfy-syntax

Uninstall the old extension for directives in .tsx files: `code --uninstall-extension helfy.helfy-syntax`.
The current extension ID is `helfy.helfy-vscode`.
