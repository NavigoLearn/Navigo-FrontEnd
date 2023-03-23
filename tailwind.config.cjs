/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      highlight: '#007aff',
      background: '#f5f5f5',
      text: '#000000',
      subtext: 'rgba(0, 0, 0, 0.5)',
    },
    extend: {},
  },
  plugins: [],
};
