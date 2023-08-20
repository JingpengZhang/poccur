import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["NotoSans"],
      },
      colors: {
        primary: "#007aff",
      },
    },
    fontWeight: {
      thin: "100",
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
      black: "900",
    },
  },
};
