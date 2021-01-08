module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '420px'
      },
      colors: {
        teal: {
          '50': '#F0FDFA',
          '100': '#CCFBF1',
          '200': '#99F6E4',
          '300': '#5EEAD4',
          '400': '#2DD4BF',
          '500': '#14B8A6',
          '600': '#0D9488',
          '700': '#0F766E',
          '800': '#115E59',
          '900': '#134E4A'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

