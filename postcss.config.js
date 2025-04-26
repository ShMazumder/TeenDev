// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {}, // Tailwind CSS
    autoprefixer: {}, // Auto-prefixer for vendor prefixes
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: { // Minify CSS only in production
        preset: 'default',
      }
    } : {})
  }
}
