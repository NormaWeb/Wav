/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    fontSize: {
      heading: ['18px', '24px'],
      sm: ['18px', '24px'],
      lg: ['26px', '72px'],
      '5xl': ['3.2rem', '60px'],
    },

    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],

      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        'primary': "#043B35",
        "green": "#075E54",
        "lite-green": "#128C7E",
        "lemon": "#DCF8C6",
        "brown": "#EBE4DC",
        "sky-blue": "#5bc5d5",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {

      },
      screens: {
        "wide": "1440px"
      }
    },
    plugins: [],
  },
}