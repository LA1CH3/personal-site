/**
 * Theme for jaylaiche.com
 * Follows System UI Theme Specification
 * @see https://github.com/system-ui/theme-ui/blob/master/theme-spec
 */

const breakpoints = ["40rem", "52rem", "64rem"]

const theme = {
  space: [0, 4, 8, 16, 24, 32, 40],
  fonts: {
    heading: "Major Mono Display, monospace",
    body: "Roboto, sans-serif",
  },
  fontSizes: [12, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "hsl(0,0%,0%)",
    secondary: "hsl(247, 98%, 50%)",
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
      fontSize: [1],
      lineHeight: [1.2],
    },
    a: {
      fontFamily: "body",
      fontSize: [1],
      color: "text",
      textDecoration: "underline",
      ":hover": {
        color: "secondary",
        cursor: "pointer",
      },
    },
    h1: {
      fontFamily: "heading",
      color: "text",
      fontSize: [4, null, 5, 6],
      textTransform: "uppercase",
      width: [null, "10rem", "20rem"],
      textAlign: ["center", "left"],
    },
    h2: {
      fontFamily: "heading",
      color: "text",
      fontSize: [1, 2, 3, 4],
      lineHeight: [1.15],
    },
    h3: {
      fontFamily: "heading",
      color: "text",
      fontSize: [1, 2, null],
    },
  },
}

export default theme
