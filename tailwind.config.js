/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        pchi: '462px',
        mbhi: '543px',
      },
      colors: {
        visual: '#cae9ff',
        searchRound: '#007be9',
      },
    },
  },
  plugins: [],
};
