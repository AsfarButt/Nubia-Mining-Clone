/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        playfair: "var(--font-playfair-display), serif", // Playfair Display
        opensans: "var(--font-opensans), sans-serif",
        cormorant: "var(--font-libre), serif",
      },
    },
  },
  plugins: [],
};
