/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        main: 'black',
        primary: '#ffbf23',
        done:'#198f6e',
        notDone:'black',
        theBackground: 'white',
        theBorder: 'black',
      },
      borderWidth: {
        DEFAULT: '1px',
        Bold: '1.8px',
      }
    },
  },
  plugins: [],
}

