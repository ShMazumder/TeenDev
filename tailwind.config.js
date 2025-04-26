module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a56db',
        secondary: '#1e429f',
      },
      backgroundImage: {
        'hero': "url('../images/hero1.webp')",
        'staire': "url('../images/staire.webp')",
        'rocket': "url('../images/rocket.webp')"
      }
    },
  },
  safelist: [
    {
      pattern: /^(text|bg|border|hover:bg)-/,
    },
    'btn-primary',
    'text-shadow',
    {
      pattern: /^aos-/,
    }
  ],
  plugins: [],
}