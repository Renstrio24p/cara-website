/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    screen: {
      "sm":""
    },
    fontFamily: {
      spartans: ["Spartan", "sans-serif"],
      poppins: ["Poppins"],
    },
    backgroundPosition: {
      topright: "top 25% right 0",
      topleft: "top 20% left 30%",
      tr: "top 30% right 30%",
    },
    extend: {
      backgroundImage: {
        hero4: "url('/hero4.webp')",
        b1: "url('/banner/b1.webp')",
        b19: "url('/banner/b19.webp')",
        button: "url('/button.webp')",
        banner1: "url('/banner/b2.webp')",
        banner2: "url('/banner/b17.webp')",
        banner3: "url('/banner/b10.webp')",
        banner4: "url('/banner/b7.webp')",
        banner5: "url('/banner/b4.webp')",
        banner6: "url('/banner/b18.webp')",
        banner7: "url('/banner/b14.webp')",
        banner8: "url('/about/banner.webp')",
      },
      textColor: {
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".btn-normal": {
          fontSize: "14px",
          fontWeight: "500",
          padding: "15px 30px",
          color: "#000",
          backgroundColor: "#fff",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          transition: "0.2s ease",
          "&:hover": {
            backgroundColor: "#088178",
            color: "#fff",
          },
        },
        ".btn-sm": {
          fontSize: "10px",
          padding: "10px 15px",
          color: "#000",
          backgroundColor: "#fff",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          transition: "0.2s ease",
          "&:hover": {
            backgroundColor: "#088178",
            color: "#fff",
          },
        },
        ".banner-box": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      });
    },
  ],
};
