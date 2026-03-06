/**
 * Creates a zip archive of the extension source for distribution.
 * Output: dist/archives/helfy-syntax-<version>.zip
 * Contents: package.json, README.md, LICENSE, src/
 */
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const pkg = require('../package.json');
const version = pkg.version;
const archiveName = `helfy-syntax-${version}.zip`;
const archivesDir = path.join(__dirname, '..', 'dist', 'archives');
const rootDir = path.join(__dirname, '..');

fs.mkdirSync(archivesDir, { recursive: true });

const output = fs.createWriteStream(path.join(archivesDir, archiveName));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`\nArchive created: dist/archives/${archiveName} (${(archive.pointer() / 1024).toFixed(1)} KB)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

const files = ['package.json', 'README.md', 'LICENSE', '.vscodeignore'];
for (const file of files) {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    archive.file(filePath, { name: file });
  }
}
archive.directory(path.join(rootDir, 'src'), 'src');

archive.finalize();
