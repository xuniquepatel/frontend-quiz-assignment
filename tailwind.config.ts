import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff",
          100: "#e4f3ff",
          500: "#1d607e",
          600: "#164a61",
        },
        quiz: {
          card: "#e9f6fb",
          border: "#d3e7f3",
        },
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        card: "2.5rem",
      },
      boxShadow: {
        panel: "0 24px 80px rgba(4,44,92,0.15)",
      },
    },
  },
  plugins: [],
}

export default config
