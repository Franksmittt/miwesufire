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
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
      },
      colors: {
        ground: "#e2dfd6",
        paper: "#f6f4ee",
        ink: "#161411",
        muted: "#6a645c",
        ember: "#9e2b16",
        coal: "#1c1916",
        smoke: "#8a8378",
        // Compat with existing class names
        void: "#e2dfd6",
        titanium: "#6a645c",
        tungsten: "#d5d1c6",
        bronze: "#9e2b16",
        cyan: "#3d5a4c",
      },
      letterSpacing: {
        tightest: "-0.04em",
        "widest-tech": "0.14em",
      },
      transitionTimingFunction: {
        rise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
