/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#056AC7",
        secondary: "#00A9B3",
        "blue-600": "#1D68F9",
        "blue-700": "#0D47A1"
      },

      screens: {
        xs: "320px", // Maxsus xs breakpoint (mobil qurilmalar uchun)
        sm: "380px", // Maxsus sm breakpoint (kichik mobil qurilmalar uchun)
        md: "768px", // Standart md breakpoint (planshetlar uchun)
        lg: "1024px", // Standart lg breakpoint (kichik noutbuklar uchun)
        xl: "1280px", // Standart xl breakpoint (katta ekranli noutbuklar uchun)
        "2xl": "1536px", // Standart 2xl breakpoint (katta monitorlar uchun)
        "3xl": "1440px" // Maxsus 3xl breakpoint (oraliq katta ekranlar uchun)
      }
    }
  },
  plugins: []
};
