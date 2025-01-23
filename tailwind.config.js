/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    './src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors:{
        primarycolor:'#010a5e',
        primarycolorlight:'#010d78',
        secondarycolor: '#FFCC00',
        paragraphcolor: '#c0c0c0',
        whitecolor: '#fff',
        blackcolor: '#000',
        greencolor: '#007936',
        redcolor: '#cc3433',
        darkcolor: '#000',
        darkcolorlight: '#171717'
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      }
    },
    fontFamily: {
      oswald: ['Oswald','sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'] 
    }
  },
  plugins: [],
}

