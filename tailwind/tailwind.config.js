/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary:{
        light:"#b91c1c",
        default:"#fb923c",
        dark:"#65a30d",
        blue:"#3b82f6",
        red:"#ef4444"
      }
    },
    fontSize:{
      "10px": "10px",
      "16px": "16px",
      "20px": "20px",
      "22px": "22px",
      "32px": ["32px", "120px"]
    },
    extend:{
      spaceing:{
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
      }
    }
  },
  plugins: [],
};

