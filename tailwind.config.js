/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './packages/apps/web-app/index.html',
    './packages/apps/web-app/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
