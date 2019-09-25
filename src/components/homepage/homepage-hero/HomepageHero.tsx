/** @jsx jsx */
import { jsx } from "theme-ui"

import { AppLayout } from "../../app/AppLayout"
import { Flex } from "../../layout/Flex"
import { Hero, HeroText } from "../../hero"

export const HomepageHero = () => (
  <Hero>
    <AppLayout>
      <Flex direction="column" alignItems="flex-start" childMarginTop={[2]}>
        <HeroText>Jay Laiche</HeroText>
        <HeroText>Front-End Developer</HeroText>
      </Flex>
    </AppLayout>
  </Hero>
)
