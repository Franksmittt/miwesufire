import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        void: "#000000",
        titanium: "#1C1C1E",
        tungsten: "#2C2C2E",
        ember: "#FF7F50",
        cyan: "#00A8A8",
        bronze: "#BF953F",
      },
      backgroundImage: {
        "bronze-gradient":
          "linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #B38728 60%, #AA771C 100%)",
        "bronze-text":
          "linear-gradient(135deg, #E6CFA0 0%, #BF953F 50%, #8C6A28 100%)",
        "night-gradient": "linear-gradient(to bottom, #000000 0%, #050505 100%)",
        "glow-radial":
          "radial-gradient(circle at center, rgba(191, 149, 63, 0.1) 0%, rgba(0,0,0,0) 60%)",
      },
      letterSpacing: {
        tightest: "-0.05em",
        "widest-tech": "0.2em",
      },
    },
  },
  plugins: [],
} satisfies Config;
