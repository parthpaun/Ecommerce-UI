/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        margin: {
          DEFAULT: "auto",
          md: "1rem",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2.5rem",
          xl: "2.5rem",
        },
      },
      colors: {
        primary: "#1A1919",
        secondary: "#ffba00",
        gray: "#3e4545",
        "light-gray": "#ebebeb",
        "lightest-gray": "#f8f8f8",
        "dark-gray": "#c5c5c5",
        "light-mid": "#707070",
        placeholder: "#696969",
        error: "#cc3333",
        stroke: "#eaeaea",
        green: "#13997c",
        blue: "#0f172a",
        yellow: "#ffba00",
        white20: "rgb(255 255 255 / 20%)",
        "light-black": "#1A1919",
        gray300: "#E4E7EC",
        "footer-icon": "#98A2B3",
        "footer-border": "#475467",
      },
    },
  },
  plugins: [],
};
