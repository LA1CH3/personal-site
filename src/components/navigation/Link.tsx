import { Styled } from "theme-ui"

import { Link as GatsbyLink } from "gatsby"

export const Link = ({ to, children, sx }) => (
  // @ts-ignore
  <Styled.a as={GatsbyLink} to={to} sx={sx}>
    {children}
  </Styled.a>
)
