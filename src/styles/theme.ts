import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      400: "#2980B9",
      800: "#2C3E50"
    },
    green: {
      500: "#27AE60"
    },
    yellow: {
      400: "#F1C40F"
    },
    red: {
      500: "#E74C3C"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        background: "blue.800"
      }
    }
  }
});
