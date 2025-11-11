/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      // Railway-inspired Palette
      black: '#0A0A0A', // Main background
      gray: {
        900: '#171717', // Card background
        800: '#262626', // Borders / Muted
        700: '#3D3D3D',
        500: '#9E9E9E', // Muted text
        200: '#EAEAEA', // Light text
        100: '#F5F5F5', // Light text primary
      },
      // Signature Gradient
      purple: {
        light: '#A78BFA',
        DEFAULT: '#8B5CF6',
        dark: '#7C3AED',
      },
      magenta: '#E11D48',
      
      // Standard colors needed
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    animation: {
      // Animation for the "shiny" gradient border
      'border-spin': 'border-spin 6s linear infinite',
      'border-pulse': 'border-pulse 3s ease-in-out infinite',
    },
    keyframes: {
      'border-spin': {
        '0%': { '--tw-gradient-angle': '0deg' },
        '100%': { '--tw-gradient-angle': '360deg' },
      },
      'border-pulse': {
        '0%, 100%': { opacity: '0.2' },
        '50%': { opacity: '0.8' },
      },
    },
    // Helper property to use in animations
    properties: {
      '--tw-gradient-angle': {
        syntax: '<angle>',
        inherits: false,
        initialValue: '0deg',
      },
    },
  },
  plugins: [],
};