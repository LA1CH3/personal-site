/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { Flex } from "../layout"
import { Link } from "../navigation"

export const AppHeader = () => (
  <Flex
    as="header"
    direction={["column", "row"]}
    justifyContent={["center", "space-between"]}
    alignItems={["center", "flex-start"]}
    childMarginTop={[3, 0]}
  >
    <Styled.h1>Jay Laiche</Styled.h1>
    <nav>
      <Flex as="ul" childMarginLeft={[4, null, 5]} justifyContent={["center"]}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/art">Art</Link>
        </li>
      </Flex>
    </nav>
  </Flex>
)
