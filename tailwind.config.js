/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const plugin = require('tailwindcss/plugin');
const tw = require('connected-ui-edge');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...tw.twTheme,
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({ ...tw.twTypeStyles });
    }),
  ],
};
