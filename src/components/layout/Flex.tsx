/** @jsx jsx */
import { jsx } from "theme-ui"
import { ReactNode, FC } from "react"

export interface FlexProps {
  as?: string
  direction?: string | string[]
  justifyContent?: string | string[]
  alignItems?: string | string[]
  flex?: string | string[]
  childMarginTop?: number | number[]
  childMarginLeft?: number | number[]
  children: ReactNode
}

export const Flex: FC<FlexProps> = ({
  as = "div",
  direction,
  justifyContent,
  alignItems,
  childMarginTop,
  childMarginLeft,
  flex,
  children,
}) => {
  const Tag = as

  return (
    // @ts-ignore
    <Tag
      sx={{
        display: "flex",
        flexDirection: direction,
        justifyContent,
        alignItems,
        flex,
        "& > * + *": {
          marginLeft: childMarginLeft || null,
          marginTop: childMarginTop || null,
        },
      }}
    >
      {children}
    </Tag>
  )
}
