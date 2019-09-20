/** @jsx jsx */
import { jsx } from "theme-ui"

import { Flex } from "../layout"

export const AppContent = ({ children }) => (
  <Flex
    as="article"
    direction={["column"]}
    alignItems={["center", "flex-start"]}
    flex={["1 0 auto"]}
    width="100%"
  >
    <div sx={{ py: "64px" }}>{children}</div>
  </Flex>
)
