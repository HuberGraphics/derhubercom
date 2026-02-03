import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const placeholders = [
  {
    filename: 'klinger-glasreinigung.png',
    title: 'Klinger Glasreinigung',
    subtitle: 'Dienstleistungswebsite'
  },
  {
    filename: 'joyrides-rent.png',
    title: 'Joyrides-Rent',
    subtitle: 'Fahrradverleih Heidelberg'
  }
];

async function generatePlaceholder(config) {
  const width = 1200;
  const height = 800;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1bde94;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:0.05" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#f8fafc"/>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <rect x="40" y="40" width="${width-80}" height="${height-80}" rx="16" fill="white" stroke="#e2e8f0" stroke-width="2"/>
      <text x="50%" y="45%" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="700" fill="#0f172a" text-anchor="middle">${config.title}</text>
      <text x="50%" y="55%" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#64748b" text-anchor="middle">${config.subtitle}</text>
      <rect x="${width/2 - 60}" y="${height - 120}" width="120" height="8" rx="4" fill="#1bde94"/>
    </svg>
  `;

  const outputPath = join(__dirname, '..', 'public', 'images', config.filename);

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`Created: ${outputPath}`);
}

async function main() {
  for (const placeholder of placeholders) {
    await generatePlaceholder(placeholder);
  }
  console.log('Done!');
}

main().catch(console.error);
