/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        nav:"#4B7553",
        page:"darkgray",
        card:"white",
        "card-hover":"#4f5e74",
        "default-text": "black",
        "blue-accent": "0084d4",
        "blue-accent-hover":"#009fff",
      }
    },
  },
  plugins: [],
};
