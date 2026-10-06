export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070b14",
        surface: "#101827",
        surfaceAlt: "#0f172a",
        card: "#111827",
        border: "#1f2a3d",
        primary: "#8b5cf6",
        primaryGlow: "#a78bfa",
        accent: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
        text: "#e5e7eb",
        muted: "#94a3b8",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.45)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top left, rgba(139,92,246,0.35), transparent 30%), radial-gradient(circle at bottom right, rgba(34,197,94,0.18), transparent 30%)",
      },
    },
  },
  plugins: [],
};
