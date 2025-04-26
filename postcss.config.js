// postcss.config.js
module.exports = {
    plugins: {
      'postcss-import': {}, // For importing other CSS files
      '@tailwindcss/nesting': {}, // Enable nested CSS (like Sass)
      tailwindcss: {}, // Tailwind CSS
      autoprefixer: {}, // Auto-prefixer for vendor prefixes
      ...(process.env.NODE_ENV === 'production' ? {
        cssnano: { // Minify CSS only in production
          preset: 'default',
        }
      } : {})
    }
  }