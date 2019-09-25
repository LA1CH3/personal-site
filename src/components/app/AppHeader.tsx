/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { AppLayout } from "./AppLayout"
import { Flex } from "../layout"
import { Link } from "../navigation"

export const AppHeader = () => (
  <header
    sx={{
      backgroundColor: "white",
      color: "black",
      py: [2, 3],
    }}
  >
    <AppLayout>
      <Flex
        direction={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems={["center", "flex-start"]}
        childMarginTop={[3, 0]}
      >
        <h1
          sx={{
            fontFamily: "heading",
          }}
        >
          Jay Laiche
        </h1>
        <nav>
          <Flex
            as="ul"
            childMarginLeft={[4, null, 5]}
            justifyContent={["center"]}
          >
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
    </AppLayout>
  </header>
)
