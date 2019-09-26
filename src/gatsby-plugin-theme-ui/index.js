/**
 * Theme for jaylaiche.com
 * Follows System UI Theme Specification
 * @see https://github.com/system-ui/theme-ui/blob/master/theme-spec
 */

const breakpoints = ["40rem", "52rem", "64rem"]

const theme = {
  space: [0, 4, 8, 16, 24, 32, 40],
  fonts: {
    heading: "Space Mono, sans-serif",
    body: "Work Sans, sans-serif",
  },
  fontSizes: [12, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "hsl(0,0%,0%)",
    secondary: "hsl(210, 76%, 34%)",
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
      fontSize: [1, 2],
      lineHeight: [1.2, 1.333],
      marginBottom: [3, 4],
    },
    a: {
      fontFamily: "body",
      color: "black",
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
      fontSize: [1, 2, 3],
      lineHeight: [1.15],
    },
    h3: {
      fontFamily: "heading",
      color: "text",
      fontSize: [2, 3, 4],
      marginBottom: [2, 3, 4],
    },
  },
}

export default theme
