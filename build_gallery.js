const fs = require('fs');
const path = require('path');

const mediaDir = path.join(__dirname, 'public/media');
const outFile = path.join(__dirname, 'public/gallery.html');

const files = fs.readdirSync(mediaDir).filter(f => f.endsWith('.webp'));

let html = `<html><head><title>Optimized Media Gallery</title></head>
<body style="display:flex; flex-wrap:wrap; font-family:sans-serif; background:#f0f0f0;">
`;

for (const file of files) {
  html += `
  <div style='margin:10px; border:1px solid #ccc; padding:10px; background:#fff; text-align:center;'>
      <img src='/media/${file}' width='400' loading='lazy'/><br/>
      <div style="margin-top:8px; font-weight:bold;">${file}</div>
  </div>`;
}

html += `</body></html>`;
fs.writeFileSync(outFile, html);
console.log('Gallery written to public/gallery.html');
