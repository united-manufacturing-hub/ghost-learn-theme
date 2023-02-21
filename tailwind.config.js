module.exports = {


  mode: 'jit',
  content: ['./.hbs', './**/.hbs', './**/**/*.hbs'],
   corePlugins: { 
    container: true 
  }, 
    plugins: [
   
 
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px', 
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    } 
  ],
  theme: {
    extend: {
      container: { 
        center: true,
        padding: '1rem',
       }, 
      colors: {    
        gray:{
          800: '#202832',
          600: '#99A1A6',
          400: '#5A5A5B',
          100: '#ACACAD',
        },
        blue:{
          800: '#0052D4', 
          200: '#6FB1FC',
          100: '#C5D9F7', 
          50: '#F1F6FD', 
        }, 
        red:{
          800: '#FD4A00', 
        }, 
        violet:{
          800: '#9747FF',   
        }, 
        rose:{
          800: '#E43CB5', 
        }, 
        amber:{ 
          100: '#FFFBDC', 
          50: '#FFFEF2',  
        }, 
        facebook:{
          100: '#3b5998'
        },
        twitter:{
          100: '#00acee'
        },
        linkedin:{
          100: '#0a66c2'
        }
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
        ],
        serif: [
          'var(--font-serif)',  
        ],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "gray-600":"#99A1A6",   
      },
      boxShadow: {
        'DEFAULT': '0px 0px 0px 1px rgba(0, 0, 0, 0.1)', 
        'lg': '0px 4px 90px rgba(163, 171, 185, 0.24)',   
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      keyframes: {
        stretch: {
          '0%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0%)' },  
        },
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'bounce-slow': 'ping 5s linear infinite', 
        'stretch': 'stretch 5s ease-out 0s alternate infinite none running;', 
      },
    },
  },
 
  // Other stuff
};