/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'inter-bold': ['Inter-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
