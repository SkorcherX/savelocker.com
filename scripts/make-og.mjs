// Renders the 1200x630 social card to public/og.png.
// Deliberately text-light: this is seen as a thumbnail in Discord and Reddit, where a screenshot
// turns to mush and long copy is unreadable.
//
//   node scripts/make-og.mjs
//
// Run it again if the wordmark or tagline changes. The PNG is committed so the build never
// depends on this script.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const logo = readFileSync(join(root, 'public/img/logo.png')).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#2A3238"/>
  <rect x="0" y="0" width="1200" height="6" fill="#129271"/>

  <g opacity="0.5">
    <circle cx="1050" cy="120" r="220" fill="#1E252A"/>
    <circle cx="120" cy="560" r="180" fill="#1E252A"/>
  </g>

  <image href="data:image/png;base64,${logo}" x="90" y="112" width="72" height="72"/>
  <text x="180" y="166" fill="#ECEFF1" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="42" font-weight="700">Save<tspan fill="#129271">Locker</tspan></text>

  <text x="90" y="330" fill="#ECEFF1" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="86" font-weight="700">No Cloud Sync?</text>
  <text x="90" y="430" fill="#129271" font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif"
        font-size="86" font-weight="700">No Problem.</text>

  <rect x="90" y="492" width="640" height="1" fill="#494949"/>
  <text x="90" y="546" fill="#8b9aaa" font-family="Consolas, JetBrains Mono, monospace"
        font-size="25">Self-hosted game save sync  ·  PC and Steam Deck</text>
</svg>`;

const out = join(root, 'public/og.png');
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
