/** @jsx jsx  */

import { jsx } from "theme-ui"

export const AppLayout = ({ children }) => (
  <div
    sx={{
      maxWidth: "1150px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    {children}
  </div>
)
