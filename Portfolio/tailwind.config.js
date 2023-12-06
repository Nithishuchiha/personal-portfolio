/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#776B5D",
        navbarColor: "#000000",
        insta: "#fe2183",
        facebook: "#3b5998",
      },
      boxShadow: {
        purple: "0px 4px 14px 0 rgb(92, 42, 90)",
        blacks: "0px 4px 14px 0 rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
  variants: {},
};
