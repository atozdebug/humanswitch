/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // purple: "#7F56D9",
        // gray: "#D0D5DD",
        // "gray-text": "#667085",
        // "gray-dark": "#525866",
        // heading: "#0A0D14",
        // "input-text": "#868C98",
        // "border-clr": "#E2E4E9",
        // "dark-purple": "#2B1664",
        // "span-clr": "#375DFB",
        // content: "#525866",
        // "border-error": "#DF1C41",
        // success: "#38C793",
        darkblue: "#0F3063",
        mediumblue: "#6355F6",
        lightblue: "#EBEDFF",
        mediumgreen: "#18CBB8",
        success: "#5cb85c",
        error: "#FDEDF0",
        "gray-dark": "#525866",
         "span-clr": "#375DFB",
         "red-code" : "#DF1C41",
         "bggreen": "#2B1664",
         "bggreen-500": "#6E3FF3",
      },
      padding: {
        100: "100%",
        60: "60%",
        50: "50%",
        "11px": "11px",
       
      },
      
      backgroundImage: {
        gradient1: "linear-gradient(180deg, #6355F6, #18CBB8)",
        "g-success": "linear-gradient(180deg, #5cb85c, #3d743d)",
      },
      translate: {
        "n1/2": "-50%",
      },
      borderRadius: {
        '20': '20px',
      
      },
      maxWidth: {
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        calc350px: "calc(100% - 350px)",
        calc300px: "calc(100% - 300px)",
        600: "600px",
        700: "700px",
        20: "20px",
        123: "123px",

        
      },
      maxHeight: {
        "vw-calc300px": "calc(100vh - 300px)",
      },
      height: {
        "vw-calc80px": "calc(100vh - 80px)",
        "vw-calc140px": "calc(100vh - 140px)",
      },
      minHeight: {
        "62px": "62px",
      },
      width: {
        60: "60%",
        "250px": "250px",
      },
      boxShadow: {
        inside: "inset 0 0 15px #6355f64f",
      },
      minwidth: {

        '168px': '168px',
        123: "123px", 

    },
    },
  },
  plugins: [require("flowbite/plugin")],
};




