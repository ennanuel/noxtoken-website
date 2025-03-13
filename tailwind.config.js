/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "lg": "1024px",
      "md": "800px",
      "sm": "660px",
      "xs": "400px"
    },
    extend: {
      fontFamily: {
        'poppins': "Poppins"
      },
      animation: {
        'loading': "full-rotate 500ms linear infinite",
        'fadeIn': "fade-in 300ms ease-in-out"
      },
      keyframes: {
        "full-rotate": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        "fade-in": {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [],
}

