/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    themes: [
      {
        homegrid: {
          primary: "#FFFFFF",
          secondary: "#EEEEEE",
          accent: "#00AEEF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
