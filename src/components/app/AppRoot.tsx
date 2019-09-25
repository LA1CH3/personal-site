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
    }}
  >
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {children}
    </div>
  </div>
)
