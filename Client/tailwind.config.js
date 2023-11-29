/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      colors: {
        primary: {
          white: "#ffffff",
          offwhite: "#FFF9F7",
          smokewhite: "#F8F7FF",
          blue: "#04103B",
          purple: "#5041BC",
          dark: "#000000",
          dark2: "#393838",
          light: "#F5F5F5",
          gray: "#868282",
          gray2: "#868686",
          gray3: "#8B909A",
          gray4: "#8E8E8E",
        },
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
      },
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
        mini: "0.8125rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
