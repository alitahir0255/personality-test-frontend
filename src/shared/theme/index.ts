import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Bebas Neue, cursive",
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#212121",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      },
      h1: {
        color: "white",
      },
      p: {
        color: "white",
      },
    },
  },
});

export default theme;
