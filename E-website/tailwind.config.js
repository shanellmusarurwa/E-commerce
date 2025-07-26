/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss({
      /* v4 specific config */
      optimize: true,
      cssPath: './src/index.css',
      configPath: './tailwind.config.js'
    })],
}

