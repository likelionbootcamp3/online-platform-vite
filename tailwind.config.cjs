/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-classes-sm": "url('/assets/banners/classes-sm.png')",
        "banner-classes-lg": "url('/assets/banners/classes-lg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
