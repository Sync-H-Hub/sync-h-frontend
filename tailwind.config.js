/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 68, 0, 1)",
        background: "rgba(27, 9, 4, 1)",
        graphite: "rgba(41, 21, 3, 1)",
        charcoal: "rgba(36, 34, 38, 1)",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, rgba(211, 102, 33, 1) 0%, rgba(252, 0, 71, 1) 100%)',
      },
    },
  },
  plugins: [],
}

