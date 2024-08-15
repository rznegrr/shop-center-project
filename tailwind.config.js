/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        info: "#616DA7",
        info100: "#DEE4FF",
        info200: "#A4AFE5",
        info800: "#7C87C1",
        gray200: "#ADADAD",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
    plugins: [],
  },
};
