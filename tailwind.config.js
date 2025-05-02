module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#1a56db',
        // secondary: '#1e429f',
        // primary: {
        //   50: '#f0f9ff',
        //   100: '#e0f2fe',
        //   200: '#bae6fd',
        //   300: '#7dd3fc',
        //   400: '#38bdf8',
        //   500: '#0ea5e9',
        //   600: '#0284c7',
        //   700: '#0369a1',
        //   800: '#075985',
        //   900: '#0c4a6e',
        // },
        // secondary: {
        //   400: '#a78bfa',
        //   500: '#8b5cf6',
        //   600: '#7c3aed',
        // }
        primary: {
          DEFAULT: '#1a56db', // base
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1a56db', // matches DEFAULT
          900: '#1e40af',
        },
        secondary: {
          DEFAULT: '#1e429f', // base
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e429f', // matches DEFAULT
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