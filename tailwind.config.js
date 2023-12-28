/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
      fontSize: {
        default: "15px",
      },
      fontWeight: {
        default: "400",
      },
      colors: {
        cyan: "hsl(180, 62%, 55%)",
        darkBlue: "hsl(234, 12%, 34%)",
        grayishBlue: "hsl(229, 6%, 66%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
      theme: {
        screens: {
          desktop: "1440px",
        },
      },
    },
  },
  plugins: [],
};
