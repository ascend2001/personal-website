module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', 'Rambla', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        lavender: {
          DEFAULT: '#F0EEFF',
          dark: '#DCD6FF',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          light: '#FF8E8E',
          dark: '#E55A5A',
        },
        sky: {
          DEFAULT: '#4ECDC4',
          light: '#7EDBD5',
        },
        yellow: {
          DEFAULT: '#FFE66D',
          dark: '#F0D44E',
        },
        midnight: {
          DEFAULT: '#1D1D43',
        },
        text: {
          dark: '#2D2D2D',
          muted: '#6B6B8A',
        },
      },
    },
  },
  plugins: [],
};
