import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'bg.primary',
      },
    },
  },
  semanticTokens: {
    colors: {
      'bg.primary': { default: 'title.200', _dark: 'background.800' },
      'bg.header': { default: 'title.200', _dark: 'background.800' },
      'text.primary': { default: 'text.600', _dark: 'title.500' },
      'text.secondary': { default: 'text.500', _dark: 'subtitle.500' },
      'icon.switch': { default: 'background.500', _dark: 'subtitle.500' },
      'btn.utilBg': { default: 'title.300', _dark: 'background.400' },
      'btn.utilText': { default: 'background.500', _dark: 'subtitle.500' },
      'footer.bg': { default: 'title.200', _dark: 'background.800' },
      'footer.inputBg': { default: 'text.50', _dark: 'background.700' },
      'footer.inputBorder': { default: 'text.200', _dark: 'background.600' },
      'footer.text': { default: 'text.500', _dark: 'text.100' },
      'footer.placeholder': { default: 'text.400', _dark: 'text.200' },
      'footer.buttonBg': { default: 'title.400', _dark: 'title.500' },
      'footer.buttonHover': { default: 'title.300', _dark: 'title.400' },
      'footer.icon': { default: 'text.500', _dark: 'text.100' },
      'footer.iconHover': { default: 'title.500', _dark: 'title.500' },
      'footer.copy': { default: 'text.400', _dark: 'text.200' },
    },
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
      800: "#003331",
      900: "#001a18",
    },
    title: {
      100: "#fcf8f5",
      200: "#e8d6c7",
      300: "#d8bfab",
      400: "#c9b093",
      500: "#c2a080",
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
      500: "#ffb173",
      600: "#e19864",
      700: "#b87a4c",
      800: "#8e5c33",
      900: "#65421c",
    },
    text: {
      50: "#ffffff",
      100: "#e0e0e0",
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
  fonts: {
    heading: "'Noto Serif', serif",
  },
});

export default theme;
