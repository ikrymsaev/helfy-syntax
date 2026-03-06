/**
 * Builds the VSIX package into dist/packages/
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pkg = require('../package.json');
const packagesDir = path.join(__dirname, '..', 'dist', 'packages');
const outPath = path.join(packagesDir, `helfy-syntax-${pkg.version}.vsix`);

fs.mkdirSync(packagesDir, { recursive: true });
execSync(`vsce package --out "${outPath}"`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
