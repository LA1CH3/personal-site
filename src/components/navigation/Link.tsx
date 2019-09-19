import { Styled } from "theme-ui"

import { Link as GatsbyLink } from "gatsby"

export const Link = ({ to, children }) => (
  // @ts-ignore
  <Styled.a as={GatsbyLink} to={to}>
    {children}
  </Styled.a>
)
