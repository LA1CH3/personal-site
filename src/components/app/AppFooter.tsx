/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { Flex } from "../layout"

export const AppFooter = () => (
  <Flex
    as="footer"
    direction={["column", "row"]}
    childMarginTop={[3, 0]}
    justifyContent={["null", "space-between"]}
    alignItems={["center", "flex-start"]}
  >
    <Flex as="ul" childMarginLeft={[4]}>
      <li>
        <Styled.a as="a">Github</Styled.a>
      </li>
      <li>
        <Styled.a as="a">LinkedIn</Styled.a>
      </li>
      <li>
        <Styled.a as="a">Email</Styled.a>
      </li>
    </Flex>
    <Styled.p>© 2019 Jay Laiche</Styled.p>
  </Flex>
)
