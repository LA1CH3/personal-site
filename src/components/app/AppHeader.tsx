/** @jsx jsx */
import { jsx } from "theme-ui"

import { NavLink } from "../navigation"

export const AppHeader = () => (
  <header
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <ul
      sx={{
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
        "& > * + *": {
          marginTop: [4, 5, 6],
        },
      }}
    >
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/music">Music</NavLink>
      </li>
      <li>
        <NavLink to="/art">Art</NavLink>
      </li>
    </ul>
    <h1
      sx={{
        fontFamily: "heading",
        fontSize: [4, 5, 6],
        textTransform: "uppercase",
        width: ["10rem", "20rem"],
        textAlign: "right",
      }}
    >
      Jay Laiche
    </h1>
  </header>
)
