const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inDir = path.join(__dirname, 'public/images/recent');
const outDir = path.join(__dirname, 'public/media');

const files = fs.readdirSync(inDir).filter(f => !f.startsWith('.'));

files.forEach(file => {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  
  sharp(path.join(inDir, file))
    .webp({ quality: 80 })
    .toFile(path.join(outDir, `${base}.webp`))
    .then(info => console.log(`Converted ${file} to ${base}.webp`))
    .catch(err => console.error(`Error with ${file}:`, err));
});
