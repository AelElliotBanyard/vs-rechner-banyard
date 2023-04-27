/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "leaf-pattern": "url('/images/leaf-pattern.png')",
        "bauhaus-fade": "url('/images/bauhaus-m-fade.png')",
        "triangles-fade": "url('/images/triangles-fade.png')",
        "circles-fade": "url('/images/circles-fade.png')",
      },
      animation: {
        "spin-reverse": "spin 1s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
