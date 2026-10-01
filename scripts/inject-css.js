const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'dist', 'output.css');

if (!fs.existsSync(cssPath)) {
  console.error('Error: dist/output.css not found. Please run npm run build:css first.');
  process.exit(1);
}

const cssContent = fs.readFileSync(cssPath, 'utf8');
let html = fs.readFileSync(indexPath, 'utf8');

const startMarker = '/* TAILWIND_COMPILED_START */';
const endMarker = '/* TAILWIND_COMPILED_END */';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const before = html.substring(0, startIndex + startMarker.length);
  const after = html.substring(endIndex);
  html = before + '\n' + cssContent + '\n' + after;
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully injected compiled Tailwind CSS into index.html (' + cssContent.length + ' bytes)');
} else {
  console.error('Could not find TAILWIND_COMPILED markers in index.html');
  process.exit(1);
}
