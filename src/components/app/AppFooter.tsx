/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { AppLayout } from "../app/AppLayout"
import { Flex } from "../layout"

export const AppFooter = () => (
  <footer
    sx={{
      py: [3],
      width: "100%",
      borderTop: "1px dotted black",
    }}
  >
    <AppLayout>
      <Flex
        direction={["column", "row"]}
        childMarginTop={[3, 0]}
        justifyContent={["null", "space-between"]}
        alignItems={["center", "center"]}
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
    </AppLayout>
  </footer>
)
