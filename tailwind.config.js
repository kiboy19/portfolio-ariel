/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dasar: 'background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

