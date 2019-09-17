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
  colors: {
    black: "hsl(0,0%,0%)",
    white: "hsl(0,0%,100%)",
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
    h1: {
      fontFamily: "heading",
      fontSize: 20,
    },
  },
}

export default theme
