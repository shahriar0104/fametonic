module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
        figtree: ['var(--font-figtree)', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}; 