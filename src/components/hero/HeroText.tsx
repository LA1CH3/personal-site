/** @jsx jsx */
import { jsx } from "theme-ui"

export const HeroText = ({ as = "div", children, variant = "medium" }) => {
  const Tag = as

  return (
    // @ts-ignore
    <Tag
      sx={{
        backgroundColor: "white",
        color: "black",
        fontFamily: "heading",
        fontSize: variant === "small" ? [1, 2] : [3, 4],
        padding: [2],
      }}
    >
      {children}
    </Tag>
  )
}
