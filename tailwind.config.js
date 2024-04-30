/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'purple': '#7F56D9',
        'gray': '#D0D5DD',
        'gray-text': '#667085',
        'gray-dark': '#525866',
        'heading': '#0A0D14',
        'input-text': '#868C98',
        'border-clr': '#E2E4E9'
       
      },
    },
  },
  plugins: [],
}

