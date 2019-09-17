/** @jsx jsx */
import { jsx } from "theme-ui"

export const AppFooter = () => (
  <footer
    sx={{
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "body",
    }}
  >
    <ul
      sx={{
        listStyleType: "none",
        display: "flex",
        flexDirection: "row",
        "& > * + *": {
          paddingLeft: [3],
        },
      }}
    >
      <li>
        <a>Github</a>
      </li>
      <li>
        <a>LinkedIn</a>
      </li>
      <li>
        <a>Email</a>
      </li>
    </ul>
    <div>Copyright 2019 - Jay Laiche</div>
  </footer>
)
