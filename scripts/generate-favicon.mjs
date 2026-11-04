import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const FONT_REGULAR =
  "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86GnM.ttf";
const FONT_ITALIC =
  "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf";

const BG = "#f9f6f1";
const INK = "#3d3530";
const GOLD = "#b8a078";
const SIZE = 64;

async function loadFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch font: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}

function pathData(font, char, x, y, size) {
  const glyph = font.getPath(char, x, y, size);
  return glyph.toPathData(2);
}

async function main() {
  const [regular, italic] = await Promise.all([loadFont(FONT_REGULAR), loadFont(FONT_ITALIC)]);

  const fontSize = 28;
  const baseline = 42;
  const oPath = pathData(regular, "O", 0, baseline, fontSize);
  const oWidth = regular.getAdvanceWidth("O", fontSize);
  const ampPath = pathData(italic, "&", oWidth - 1, baseline, fontSize);
  const ampWidth = italic.getAdvanceWidth("&", fontSize);
  const rPath = pathData(regular, "R", oWidth + ampWidth - 3, baseline, fontSize);
  const totalWidth = oWidth + ampWidth + regular.getAdvanceWidth("R", fontSize) - 3;
  const offsetX = (SIZE - totalWidth) / 2;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" role="img" aria-label="O&amp;R">
  <rect width="${SIZE}" height="${SIZE}" fill="${BG}"/>
  <g transform="translate(${offsetX.toFixed(2)} 0)">
    <path d="${oPath}" fill="${INK}"/>
    <path d="${ampPath}" fill="${GOLD}"/>
    <path d="${rPath}" fill="${INK}"/>
  </g>
</svg>
`;

  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg);

  const png32 = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
  const png180 = await sharp(Buffer.from(svg)).resize(180, 180).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, "favicon-32.png"), png32);
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), png180);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), png32);

  console.log("Wrote public/favicon.svg, favicon-32.png, apple-touch-icon.png, favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
