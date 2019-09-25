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
  width?: string | string[]
  sx?: any
}

export const Flex: FC<FlexProps> = ({
  as = "div",
  direction,
  justifyContent,
  alignItems,
  childMarginTop,
  childMarginLeft,
  flex,
  width,
  children,
  sx,
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
        width,
        "& > * + *": {
          marginLeft: childMarginLeft || null,
          marginTop: childMarginTop || null,
        },
        ...sx,
      }}
    >
      {children}
    </Tag>
  )
}
