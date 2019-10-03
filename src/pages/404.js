import React from "react"

import { AppShell } from "../modules/app"
import { NotFound } from "../modules/not-found"
import { Flex } from "../components/layout"

const IndexPage = () => (
  <AppShell>
    <Flex as="article" direction="column" alignItems="flex-start" width="100%">
      <NotFound />
    </Flex>
  </AppShell>
)

export default IndexPage
