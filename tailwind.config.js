/ @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        '5':'5px',
        '18':'5rem',
      },
      width:{
        '85':'85rem',
        '5':'1.2rem',
        '86':'368px',
        '90':'380px',
        '95':'95%',
        '45':'45%',
         '70':'70%',
         '61':'57%',
      }
    },
    screens: {
      'sm-1' :'490px',
      sm: '640px',
      md: '768px',
      '0-md':'913px',
      '1-md':'924px',
      '1md':'1110px',
      lg: '1024px',
      xl: '1280px',
      '1xl':'1400px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}