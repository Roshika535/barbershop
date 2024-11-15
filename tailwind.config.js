/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'hoverbutton': '#E8F9FD',
        themeyellow: '#DAA520',
      }
    },
  },
  plugins: [],
}

