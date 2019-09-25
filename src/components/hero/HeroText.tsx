/** @jsx jsx */
import { jsx } from "theme-ui"

export const HeroText = ({ as = "div", children }) => {
  const Tag = as
  return (
    // @ts-ignore
    <Tag
      sx={{
        backgroundColor: "white",
        color: "black",
        fontFamily: "heading",
        fontSize: [3, 4],
        padding: [2],
      }}
    >
      {children}
    </Tag>
  )
}
