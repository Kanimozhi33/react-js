/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")             // DaisyUI is a Tailwind CSS plugin that provides pre-designed UI components, making it easier to build user interfaces quickly and consistently.
  ],
}