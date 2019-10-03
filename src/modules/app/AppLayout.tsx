/** @jsx jsx  */
import { jsx } from "theme-ui"

export const AppLayout = ({ children }) => (
  <div
    sx={{
      width: "100%",
      margin: "0 auto",
      maxWidth: "600px",
    }}
  >
    {children}
  </div>
)
