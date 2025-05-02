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
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
      pattern: /^(text|bg|border|hover:bg)-(red|blue|green|yellow)-/,
    },
    'btn-primary',
    'text-shadow',
    {
      pattern: /^aos-/,
    }
  ],
  plugins: [],
};