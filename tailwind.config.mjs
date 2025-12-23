/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "var(--brand-orange)",
          yellow: "var(--brand-yellow)",
          pink: "var(--brand-pink)",
          cream: "var(--brand-cream)",
        },
      },
    },
  },
  plugins: [],
};
