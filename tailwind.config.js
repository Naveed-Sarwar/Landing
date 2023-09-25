/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "proper": "url('../../assets/property.jpeg')",
        "hill": "url('../../assets/propertyOne.webp')",
        "hillSecond": "url('../../assets/2.1.webp')",
        "hillThird": "url('../../assets/propertyThree.webp')",

      }
    },
  },
  plugins: [
  ],
}

