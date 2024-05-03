/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // purple: "#7F56D9",
        // gray: "#D0D5DD",
        "gray-text": "#667085",
        "gray-dark": "#525866",
        heading: "#0A0D14",
        "input-text": "#868C98",
        "border-clr": "#E2E4E9",
        "dark-purple": "#2B1664",
        "span-clr": "#375DFB",
        content: "#525866",
        "border-error": "#DF1C41",
        success: "#38C793",
       "button-clr" : "#375DFB",
      },
      minwidth: {

        '168px': '168px',
    },
    },
  },
  plugins: [],
};
