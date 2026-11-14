Editor support for Helfy `.hf` templates in VS Code, Cursor and other VS Code based editors.

## Install

```bash
npx helfy-create --install-extension
```

Or download `helfy-vscode.vsix` below and run `code --install-extension helfy-vscode.vsix`
(or Extensions → … → Install from VSIX). Reload the editor window afterwards.

## What's new in 0.4.0

- Translation-key completion inside `t()` and `t.rich()` calls in `.hf` templates, including aliased and namespace imports from `@helfy/helfy/lang`.
- Hover shows translations across languages, message parameters, metadata and rich tags.
- Go-to-definition opens the matching key in a `*.lang.json` catalog.
- Diagnostics for missing translation keys, parameter mismatches, unknown rich tags and missing metadata when required.
- Automatic catalog discovery in `lang/` or `src/lang/`, with optional `helfy-lang.json` settings for catalog location, default/current language and required metadata.
- Updated bundled language server and catalog parser; no separate server installation required.

Use with `@helfy/helfy@0.9.0` and `@helfy/helfy-lint@0.6.0` for the matching language runtime, catalog loader, `@watch` API and lint rules. The framework and linter are installed separately through npm.

## Features

- Highlighting of markup, directives, expressions and scoped/global styles, including nested CSS
- Native Markdown highlighting and navigation in `.hf` templates
- Type checking of template and style expressions against the component class
- Hover, go-to-definition and completion, including translation keys
- Template syntax errors and formatting

## Upgrading from helfy-syntax

Uninstall the old extension for directives in .tsx files: `code --uninstall-extension helfy.helfy-syntax`.
The current extension ID is `helfy.helfy-vscode`.
