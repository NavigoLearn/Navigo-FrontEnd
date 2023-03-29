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
        textmain: '#000000',
        textsecondary: '#000000/60',
        subtext: 'rgba(0, 0, 0, 0.5)',
        textgradient: 'linear-gradient(90deg, #561BB6 0%, #253FC8 100%)',
        buttongradient: 'linear-gradient(90deg, #3361D8 0%, #262EE7 100%)',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
