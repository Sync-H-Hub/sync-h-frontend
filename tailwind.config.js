/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(39, 251, 233, 1)",
        background: "rgba(26, 24, 27, 1)",
        graphite: "rgba(32, 30, 34, 1)",
        charcoal: "rgba(36, 34, 38, 1)",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, rgba(30, 214, 255, 1) 0%, rgba(40, 255, 229, 1) 100%)',
      },
    },
  },
  plugins: [],
}

