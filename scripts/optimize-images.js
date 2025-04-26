// const sharp = require('sharp');
// const fs = require('fs');

// // Convert all src/images/* to public/images/*.webp
// fs.readdirSync('./src/images').forEach(file => {
//   sharp(`./src/images/${file}`)
//     .webp({ quality: 80 })
//     .toFile(`./public/images/${file.replace(/\.[^/.]+$/, '')}.webp`);
// });


const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process images
fs.readdirSync(path.join(__dirname, '../src/images')).forEach(file => {
  const inputPath = path.join(__dirname, '../src/images', file);
  const outputName = file.replace(/\.[^/.]+$/, '');
  const outputPath = path.join(outputDir, `${outputName}.webp`);

  sharp(inputPath)
    .webp({ 
      quality: 80,
      lossless: false,
      alphaQuality: 100
    })
    .toFile(outputPath)
    .then(() => console.log(`Optimized: ${file} → ${outputName}.webp`))
    .catch(err => console.error(`Error processing ${file}:`, err));
});