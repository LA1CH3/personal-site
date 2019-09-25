/** @jsx jsx */
import { jsx } from "theme-ui"

import { AppLayout } from "../app/AppLayout"
import { Flex } from "../layout/Flex"
import { Hero, HeroText } from "../hero"

export const BlogHero = ({ title = "Blog", date = false }) => (
  <Hero>
    <AppLayout>
      <Flex direction="column" alignItems="flex-start" childMarginTop={[2]}>
        <HeroText as="h2">{title}</HeroText>
      </Flex>
    </AppLayout>
  </Hero>
)
