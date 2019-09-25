/** @jsx jsx */
import { jsx } from "theme-ui"

export const AppSidebar = ({ children }) => (
  <div
    sx={{
      gridArea: "sidebar",
      padding: [2, 3, 4],
      textAlign: "right",
    }}
  >
    {children}
  </div>
)
