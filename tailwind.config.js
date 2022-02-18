/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '-3': 'var(--step--3)',
      '-2': 'var(--step--2)',
      '-1': 'var(--step--1)',
      0: 'var(--step-0)',
      1: 'var(--step-1)',
      2: 'var(--step-2)',
      3: 'var(--step-3)',
      4: 'var(--step-4)',
      5: 'var(--step-5)',
      6: 'var(--step-6)',
      7: 'var(--step-7)',
    },
    spacing: {
      0.5: '0.25rem',
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
      7: '3.5rem',
      8: '4rem',
    },
    extend: {},
  },
  plugins: [],
};
