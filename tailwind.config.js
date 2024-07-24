/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1D9BF0",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
