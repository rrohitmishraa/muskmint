module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14532d", // deep green
        primarySoft: "#dcfce7", // very light green
        accent: "#22c55e", // action green
        muted: "#6b7280", // gray text
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
