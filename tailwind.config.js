/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          950: "#050607",
          900: "#0b0d10",
          800: "#11151b",
          700: "#1a2028",
        },
        frost: {
          100: "#f5f7f8",
          200: "#dce3e8",
          300: "#aab6c0",
          400: "#75818b",
        },
        nord: {
          blue: "#83b8ff",
          violet: "#9b8cff",
          cyan: "#8fe8ff",
          moss: "#c7ffdd",
        },
      },
      boxShadow: {
        glow: "0 0 120px rgba(131, 184, 255, 0.18)",
        "panel-glow": "0 24px 90px rgba(0, 0, 0, 0.42)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 10%, rgba(143, 232, 255, 0.12), transparent 28rem), radial-gradient(circle at 82% 2%, rgba(155, 140, 255, 0.16), transparent 30rem), radial-gradient(circle at 50% 110%, rgba(199, 255, 221, 0.1), transparent 38rem)",
      },
    },
  },
  plugins: [],
};
