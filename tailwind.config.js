/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Backgrounds
        'luxury-black': '#050505',
        'charcoal-black': '#0D0D0D',
        'deep-black': '#111111',
        'section-dark': '#161616',

        // Gold Palette
        'gold-primary': '#C9A15D',
        'gold-accent': '#D4AF6A',
        'gold-light': '#E6C78A',
        'gold-border': '#9B7741',

        // Text Colors
        'text-heading': '#F0E8D4',
        'text-secondary': '#E7DCC8',
        'text-paragraph': '#B6B6B6',
        'text-gold': '#C9A15D',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        'heading-alt': ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A15D 0%, #E6C78A 50%, #C9A15D 100%)',
      },
    },
  },
  plugins: [],
}
