/* @jsx jsx **/
import { jsx, Styled } from "theme-ui"

import { AppLayout } from "../app/"
import { Flex } from "../../components/layout"

export const NotFound = () => (
  <section
    sx={{
      width: "100%",
    }}
  >
    <AppLayout>
      <Flex direction="row" justifyContent="center">
        <Styled.h3 sx={{ marginBottom: [4, 5] }}>page not found :(</Styled.h3>
      </Flex>
    </AppLayout>
  </section>
)
