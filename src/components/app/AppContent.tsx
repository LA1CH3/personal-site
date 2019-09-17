/** @jsx jsx */
import { jsx } from "theme-ui"

export const AppContent = ({ children }) => (
  <article
    sx={{
      fontFamily: "heading",
      fontSize: [1, 2, 3, 4],
      paddingTop: ["64px"],
      flex: "1 0 auto",
    }}
  >
    {children}
  </article>
)
