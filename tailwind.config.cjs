/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3361D8',
        secondary: '#3C42CE',
        highlight: '#007aff',
        background: '#ECEFF2',
        textgradient: 'linear-gradient(90deg, #561BB6 0%, #253FC8 100%)',
        resourceSubNode: '#DEE2E7',
        white: '#FFFFFF',
      },
      borderColor: {
        light: 'rgb(0,0,0,0.3)',
      },
      textColor: {
        main: 'rgb(0,0,0)',
        secondary: 'rgb(0,0,0,0.6)',
        placeholder: 'rgb(0,0,0,0.3)',
      },
      fontFamily: {
        'kanit-text': ['"Kanit"'],
        'roboto-text': ['"Roboto"'],
        'oxygen-text': ['"Oxygen"'],
      },
      boxShadow: {
        standard: '0px 4px 20px rgba(0, 0, 0, 0.15)',
      },
      screens: {
        'big': '1277px',
        'medium': '841px',
      },
<<<<<<< HEAD

=======
      backgroundImage: {
        buttongradient: 'linear-gradient(90deg, #3361D8 0%, #262EE7 100%)',
      }
>>>>>>> cbd41e966a78bd92b54c9c4efd4610a8d1dafeac
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
