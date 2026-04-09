/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#c8102e',
        'dark-bg': '#0d0d0d',
        surface: '#161616',
        'surface-alt': '#111111',
        'border-subtle': '#222222',
        'border-mid': '#2a2a2a',
        'text-muted': '#888888',
        'text-dim': '#555555',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
