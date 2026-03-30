const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, 'Media');
const outputDir = path.join(__dirname, 'public/media');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const validExts = ['.jpg', '.jpeg', '.png', '.heic'];

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!validExts.includes(ext)) return;

  const baseName = path.basename(file, path.extname(file));
  const outPath = path.join(outputDir, `${baseName}.webp`);

  if (fs.existsSync(outPath)) {
    return;
  }

  const inPath = path.join(inputDir, file);
  
  try {
    // For HEIC, we might need to use sips to convert to JPEG first if sharp doesn't support it
    if (ext === '.heic') {
      try {
        await sharp(inPath).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 80 }).toFile(outPath);
        console.log(`Converted ${file} directly with sharp`);
      } catch (err) {
        // Fallback: use sips to convert to JPG first
        const tmpJpg = path.join('/tmp', `${baseName}_tmp.jpg`);
        execSync(`sips -s format jpeg "${inPath}" --out "${tmpJpg}"`, { stdio: 'ignore' });
        await sharp(tmpJpg).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 80 }).toFile(outPath);
        fs.unlinkSync(tmpJpg);
        console.log(`Converted ${file} via sips fallback`);
      }
    } else {
      await sharp(inPath).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 80 }).toFile(outPath);
      console.log(`Converted ${file}`);
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
  }
}

async function main() {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    await processFile(file);
  }
  console.log('Done!');
}

main();
