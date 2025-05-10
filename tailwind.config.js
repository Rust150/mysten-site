/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: ['floating-stars'],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['"Bangers"', 'cursive'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'floatStars': 'floatStars 120s linear infinite',
      },
      keyframes: {
        floatStars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 1000px' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
};
