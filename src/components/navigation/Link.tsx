/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link as GLink } from "gatsby"

export const NavLink = ({ children, to }) => (
  <GLink
    to={to}
    sx={{
      fontFamily: "heading",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "black",
      fontSize: [2, 3, 4],
    }}
  >
    {children}
  </GLink>
)
