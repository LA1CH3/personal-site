/**
 * Theme for jaylaiche.com
 * Follows System UI Theme Specification
 * @see https://github.com/system-ui/theme-ui/blob/master/theme-spec
 */

const breakpoints = ["40rem", "52rem", "64rem"]

const systemFontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

export const colorModesKeys = new Set(["default", "dark", "wildberry"])

const theme = {
  space: [0, 4, 8, 16, 24, 32, 48],
  fonts: {
    heading: systemFontStack,
    body: systemFontStack,
  },
  fontSizes: [12, 16, 20, 24, 28, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 800,
  },
  colors: {
    background: "hsl(0, 0%, 100%)",
    text: "hsl(0,0%,0%)",
    secondary: "hsl(255, 100%, 50%)",
    modes: {
      dark: {
        background: "hsl(0, 0%, 0%)",
        text: "hsl(0, 0%, 100%)",
        secondary: "hsl(146, 100%, 50%)",
      },
      wildberry: {
        background: "hsl(188,100%,50%)",
        text: "hsl(0,0%,0%)",
        secondary: "hsl(255,100%,50%)",
      },
    },
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  styles: {
    root: {
      fontFamily: "body",
    },
    p: {
      fontFamily: "body",
      color: "text",
      fontSize: [1, 1, 2],
      lineHeight: [1.2, 1.5],
      marginBottom: [3, 4],
    },
    a: {
      fontFamily: "body",
      color: "text",
      fontWeight: "heading",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        cursor: "pointer",
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      fontFamily: "heading",
      fontWeight: "bold",
      color: "text",
      marginBottom: [4, 5],
    },
    h2: {
      fontSize: [4, 5, 6],
      fontFamily: "heading",
      fontWeight: "bold",
      color: "text",
    },
    h3: {
      fontFamily: "heading",
      color: "text",
      fontSize: [2, 3, 4],
      marginBottom: [4],
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "heading",
      color: "text",
      fontSize: [1, 2, 3],
      paddingTop: 2,
      marginBottom: [3],
      fontWeight: "bold",
    },
  },
}

export default theme
