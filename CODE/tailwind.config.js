/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "leaf-pattern": "url('/images/leaf-pattern.png')",
        "bauhaus-fade": "url('/images/bauhaus-m-fade.png')",
      }
    },
  },
  plugins: [],
};
