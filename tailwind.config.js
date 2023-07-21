/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['0.78rem', {
          lineHeight: '1rem',
          letterSpacing: '-0.001em',
          fontWeight: '400',
        }],
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#131972',
        'primaryHover': '#1E2586'
      }
    },
  },
  plugins: [],
}
