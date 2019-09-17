/** @jsx jsx */
import { jsx } from "theme-ui"

export const AppRoot = ({ children }) => (
  <div
    sx={{
      width: "100%",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      padding: 3,
      border: "6px solid black",
    }}
  >
    <div
      sx={{
        maxWidth: "1250px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {children}
    </div>
  </div>
)
