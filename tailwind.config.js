/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofia': ['Sofia Pro', 'sans-serif'],
        'newake': ['Newake', 'sans-serif'],
        'bricolage': ['"Bricolage Grotesque"', 'sans-serif'],
        'opendyslexic': ['OpenDyslexic', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
