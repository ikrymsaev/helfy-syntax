# Helfy for VS Code

Editor extension for [Helfy](https://www.npmjs.com/package/@helfy/helfy) `.hf` templates — VS Code, Cursor and other
VS Code based editors. This repository hosts its releases.

For `.hf` files it provides:

- syntax highlighting of markup, directives (`@if`, `@for`, `@slot`, `@safe`, `@fragment`, ...), expressions and
  `<style>`;
- type checking of template expressions against the component class (`@template<Component>()`);
- hover, go-to-definition and completion in expressions;
- syntax errors of the template;
- formatting.

## Install

```bash
npx helfy-create --install-extension
```

installs (or updates) the latest release into every editor whose command line tool is on `PATH`
(`code`, `cursor`, `codium`, `windsurf`). `npx helfy-create my-app` offers the same when creating a project.

By hand: download [helfy-vscode.vsix](https://github.com/ikrymsaev/helfy-syntax/releases/latest/download/helfy-vscode.vsix)
from the latest release and run

```bash
code --install-extension helfy-vscode.vsix
```

or `Extensions` → `...` → `Install from VSIX...`. Reload the editor window afterwards.

## The old `helfy-syntax` extension

Before `.hf` templates, Helfy directives were written inside `.tsx` files, and this repository held an extension that
highlighted them (`helfy.helfy-syntax`). It is no longer developed and conflicts with the current one — uninstall it:

```bash
code --uninstall-extension helfy.helfy-syntax
```

## Releases

Each release has the extension attached as `helfy-vscode.vsix` — the same file name every time, so
`releases/latest/download/helfy-vscode.vsix` always points to the latest version.

## License

MIT
