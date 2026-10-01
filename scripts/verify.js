const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const missing = [];

for (let i = 1; i <= 20; i++) {
  if (!html.includes(`id="item-prob-${i}"`)) missing.push(`item-prob-${i}`);
  if (!html.includes(`id="sol-prob-${i}"`)) missing.push(`sol-prob-${i}`);
  if (!html.includes(`toggleSolution('sol-prob-${i}')`)) missing.push(`toggleSolution-prob-${i}`);
}

for (let s = 1; s <= 5; s++) {
  if (!html.includes(`id="sub-section-probability-${s}"`)) missing.push(`sub-section-probability-${s}`);
  if (!html.includes(`id="nav-btn-probability-${s}"`)) missing.push(`nav-btn-probability-${s}`);
}

if (!html.includes('id="nav-btn-probability-all"')) missing.push('nav-btn-probability-all');

console.log('Missing count:', missing.length);
if (missing.length > 0) {
  console.error('Missing elements:', missing);
  process.exit(1);
} else {
  console.log('SUCCESS: All 20 items, solutions, toggles, and 5 sub-sections are verified.');
}
