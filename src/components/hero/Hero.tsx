/** @jsx jsx */
import { jsx } from "theme-ui"

import { AppLayout } from "../app/AppLayout"

export const Hero = ({ children }) => (
  <section
    sx={{
      width: "100%",
      backgroundColor: "blue",
      background: "linear-gradient(to bottom right, #159957, #155799)",
      py: [6],
      px: [2],
    }}
  >
    <AppLayout>{children}</AppLayout>
  </section>
)
