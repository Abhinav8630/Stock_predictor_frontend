/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#B7C9F2',
          DEFAULT: '#0A2463',
          dark: '#081B4B',
        },
        secondary: {
          light: '#E2E8F0',
          DEFAULT: '#64748B',
          dark: '#475569',
        },
        success: {
          light: '#DCFCE7',
          DEFAULT: '#4BB543',
          dark: '#3C9136',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#FF9800',
          dark: '#E67E00',
        },
        error: {
          light: '#FEE2E2',
          DEFAULT: '#DC3545',
          dark: '#B82C3A',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};