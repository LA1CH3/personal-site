import { Flex } from "../../components/layout"

export const AppContent = ({ children }) => (
  <Flex
    as="main"
    direction={["column"]}
    alignItems={["center", "flex-start"]}
    flex={["1 0 auto"]}
    width="100%"
    sx={{
      padding: [3, null, 0],
    }}
  >
    {children}
  </Flex>
)
