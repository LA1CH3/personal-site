/** @jsx jsx  */

import { jsx } from "theme-ui"

export const AppLayout = ({ children }) => (
  <div
    sx={{
      width: "100%",
      maxWidth: "900px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    {children}
  </div>
)
