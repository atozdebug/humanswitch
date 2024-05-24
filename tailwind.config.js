import { Pattern } from '@mui/icons-material';

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
        "grayMedium1": "#868C98",
       
        // "dark-purple": "#2B1664",
        // "span-clr": "#375DFB",
        // content: "#525866",
        // "border-error": "#DF1C41",
        success2: "#38C793",
        darkblue: "#0F3063",
        darkblue2: "#335CFF",
        mediumblue: "#6355F6",
        lightblue: "#EBEDFF",
        mediumgreen: "#18CBB8",
        'blue-600': 'rgb(99 85 246 / var(--tw-bg-opacity))',
        success: "#5cb85c",
        error: "#FDEDF0",
        "gray-dark": "#525866",
        "gray-dark2": "#3B404F",
        "span-clr": "#375DFB",
        "red-code": "#DF1C41",
        bggreen: "#2B1664",
        "bggreen-500": "#6E3FF3",
        "main-heading": " #0A0D14",
        lightgray: "#F6F8FA",
        lightgray2: "#F9FAFB",
        lightgray3: "#E2E4E9",
        mediumgray2: "#B7C0D0",
        red2: "#D74B81",
        'slate-300': '#E2E4E9',
      },
      backgroundImage: {
        'pattern': 'url(../assets/images/Pattern.png)',
      },
      padding: {
        100: "100%",
        60: "60%",
        50: "50%",
        "11px": "11px",
        "108px": "108px",
      },
      margin: {
        "-140px": "-140px",
      },

      backgroundImage: {
        gradient1: "linear-gradient(180deg, #6355F6, #18CBB8)",
        "g-success": "linear-gradient(180deg, #5cb85c, #3d743d)",
      },
      translate: {
        "n1/2": "-50%",
      },
      borderRadius: {
        20: "20px",
        10: "10px",
      },
      maxWidth: {
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        "392px": "392px",
        calc350px: "calc(100% - 350px)",
        calc300px: "calc(100% - 300px)",
        calc40px: "calc(100% - 40px)",
        600: "600px",
        700: "700px",
        808: "808px",
        20: "20px",
        123: "123px",
        "172px": "172px",
        13: "13px",
      },
      maxHeight: {
        "vw-calc300px": "calc(100vh - 300px)",
        vhcalc88px: "calc(100vh - 88px)",
        "100vh": "100vh",
      },
      height: {
        "vw-calc80px": "calc(100vh - 80px)",
        "vw-calc140px": "calc(100vh - 140px)",
        "1px": "1px",
      },
      minHeight: {
        "62px": "62px",
        13: "13px",
        vhcalc88px: "calc(100vh - 88px)",
        vhcalc155px: "calc(100vh - 155px)",
        vhcalc135px: "calc(100vh - 135px)",
        vhcalc225px: "calc(100vh - 225px)",
        vhcalc93px: "calc(100vh - 93px)",
      },
      width: {
        60: "60%",
        "250px": "250px",
        "272px": "272px",
        "172px": "172px",
        "100-272px": "calc(100% - 272px)",
      },
      boxShadow: {
        inside: "inset 0 0 15px #6355f64f",
      },
      minwidth: {
        "168px": "168px",
        123: "123px",
      },
      padding: {
        "20px": "20px",
        "18px": "18px",
        "44px": "44px",
      },
      margin: {
        "20px": "20px",
      },
      translate: {
        n50: "-50%",
      },
      left: {
        n5: "-1.25rem"
      },
      fontSize: {
        "10px": "10px"
      },
      borderRadius: {
        '20px': '20px'
      },
      gap: {
        '14px': '14px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
