/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['ubuntu', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      fontSize: {

      },
      maxWidth: {
        withPadding: '1312px'
      },
      colors: {
        'main-blue': '#004e92',
        'light-blue': '#26D0CE'
      },
      borderRadius: {
        card: '18px'
      }
    },
    variants: {
      margin: ['responsive', 'last', 'first'],
      padding: ['responsive', 'odd', 'even']
    },
    plugins: []
  }
};