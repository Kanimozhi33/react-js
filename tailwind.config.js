/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust these paths to match your project structure
  ],
  theme: {
    extend: {
      fontFamily:{
        'kanit':['Kanit', 'sans-serif'],
        'bebas': ["Bebas Neue", 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'caveat': ['caveat','cursive'],
        'oswald':["Oswald", 'sans-serif']
      }
    },
    keyframes: {
        shimmer:{
          '0%':{backgroundPosition:'-1000px 0'},
          '100%':{backgroundPosition:'1000px 0'}}
        },

        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: { // A simpler fade in
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'shimmer': 'shimmer 1.5s infinite linear',
      },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};











