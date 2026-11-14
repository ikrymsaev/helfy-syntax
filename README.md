# Helfy for VS Code — Releases

This repository distributes release builds of the Helfy extension for `.hf` templates
in VS Code, Cursor and other VS Code based editors.

Release packages and version history are available in **GitHub Releases**.
The instructions below cover installation from a downloaded VSIX package.

## Download

- [Latest release](https://github.com/ikrymsaev/helfy-syntax/releases/latest)
- [Download the latest VSIX](https://github.com/ikrymsaev/helfy-syntax/releases/latest/download/helfy-vscode.vsix)
- [All releases and release notes](https://github.com/ikrymsaev/helfy-syntax/releases)

The extension package is published as `helfy-vscode.vsix` in the release assets.
To download a specific version, open its release and select that file under **Assets**.

## Install from VSIX

1. Download `helfy-vscode.vsix` from the desired release.
2. In your editor, open **Extensions** → **...** → **Install from VSIX...**.
3. Select the downloaded file and reload the editor if prompted.

### VS Code

```bash
code --install-extension helfy-vscode.vsix
```

### Cursor

```bash
cursor --install-extension helfy-vscode.vsix
```

Run the command from the folder containing the downloaded file, or provide its full path.
If the editor command is unavailable, use **Install from VSIX...** as described above.

## Update or install an older version

To update, download `helfy-vscode.vsix` from the latest release and install it the same way.
To install an older version, download the package from that version's release instead.

## Extension stores

Official Visual Studio Marketplace and Open VSX links will be added here when the
extension is published there. Until then, use the VSIX packages from GitHub Releases.

## License

[MIT](LICENSE)
