/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f6f8f6',
          100: '#e8f2e8',
          200: '#d0e5d1',
          300: '#a8d1aa',
          500: '#6ea172',
          600: '#5a8a5e',
          700: '#486e4c',
        },
        'warm-beige': {
          50: '#faf9f7',
          100: '#f4f1ed',
          200: '#ede7df',
          300: '#e1d5c7',
        },
        'soft-peach': {
          100: '#fef7f3',
          200: '#fde9dc',
          300: '#fbd4bb',
        },
        'text': {
          primary: '#2d4a32',
          secondary: '#5a6b5d',
          muted: '#8b9a8e',
        }
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
        'syne': ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
