import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Noto Serif', serif",
  },
  colors: {
    background: {
      100: "#a6c5c3",
      200: "#80a3a1",
      300: "#5c817e",
      400: "#3b5e5b",
      500: "#224643",
      600: "#143532",
      700: "#0a2725",
      800: "#003331", // <-- Color original
      900: "#001a18",
    },
    title: {
      100: "#fcf8f5",
      200: "#e8d6c7",
      300: "#d8bfab",
      400: "#c9b093",
      500: "#c2a080", // <-- Color original
      600: "#b18d6e",
      700: "#9c7a5c",
      800: "#85664b",
      900: "#6b5238",
    },
    subtitle: {
      100: "#fff4e8",
      200: "#ffe6c5",
      300: "#ffc89b",
      400: "#ffb885",
      500: "#ffb173", // <-- Color original
      600: "#e19864",
      700: "#b87a4c",
      800: "#8e5c33",
      900: "#65421c",
    },
    text: {
      50: "#ffffff",
      100: "#e0e0e0", // <-- Color original
      200: "#c0c0c0",
      300: "#a0a0a0",
      400: "#808080",
      500: "#606060",
      600: "#404040",
      700: "#202020",
      800: "#101010",
      900: "#000000"
    }
  },
});

export default theme;
