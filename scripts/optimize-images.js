// // #1
// const sharp = require('sharp');
// const fs = require('fs');

// // Convert all src/images/* to public/images/*.webp
// fs.readdirSync('./src/images').forEach(file => {
//   sharp(`./src/images/${file}`)
//     .webp({ quality: 80 })
//     .toFile(`./public/images/${file.replace(/\.[^/.]+$/, '')}.webp`);
// });

// // #2
// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');

// // Create output directory if it doesn't exist
// const outputDir = path.join(__dirname, '../public/images');
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// // Process images
// fs.readdirSync(path.join(__dirname, '../src/images')).forEach(file => {
//   const inputPath = path.join(__dirname, '../src/images', file);
//   const outputName = file.replace(/\.[^/.]+$/, '');
//   const outputPath = path.join(outputDir, `${outputName}.webp`);

//   sharp(inputPath)
//     .webp({ 
//       quality: 80,
//       lossless: false,
//       alphaQuality: 100
//     })
//     .toFile(outputPath)
//     .then(() => console.log(`Optimized: ${file} → ${outputName}.webp`))
//     .catch(err => console.error(`Error processing ${file}:`, err));
// });

// // #3

const sharp = require('sharp');
const { mkdir, readdir } = require('fs/promises');
const path = require('path');

// Configuration - same as before
const CONFIG = {
  inputDir: path.join(__dirname, '../src/images'),
  outputDir: path.join(__dirname, '../public/images'),
  formats: [
    { format: 'webp', options: { quality: 80 } }
  ]
};

// Simple logging
const log = {
  success: (msg) => console.log(`✓ ${msg}`),
  error: (msg) => console.error(`✗ ${msg}`),
  info: (msg) => console.log(`ℹ ${msg}`)
};

async function optimizeImages() {
  try {
    log.info('Starting image optimization...');
    await mkdir(CONFIG.outputDir, { recursive: true });

    const files = (await readdir(CONFIG.inputDir))
      .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    if (!files.length) {
      log.info('No images found in src/images/');
      return;
    }

    await Promise.all(files.map(async (file) => {
      try {
        const outputFile = file.replace(/\.\w+$/, '.webp');
        const outputPath = path.join(CONFIG.outputDir, outputFile);
        
        await sharp(path.join(CONFIG.inputDir, file))
          .webp(CONFIG.formats[0].options)
          .toFile(outputPath);
          
        log.success(`Generated: ${outputFile}`);
      } catch (err) {
        log.error(`Failed ${file}: ${err.message}`);
      }
    }));

    log.info('Optimization complete!');
  } catch (err) {
    log.error(`Optimization failed: ${err.message}`);
    process.exit(1);
  }
}

optimizeImages();