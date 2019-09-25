/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { AppLayout } from "../../app/AppLayout"
import { Flex } from "../../layout/Flex"

const HeroText = ({ children }) => (
  <div
    sx={{
      backgroundColor: "white",
      color: "black",
      fontFamily: "heading",
      fontSize: [3, 4],
      padding: [2],
    }}
  >
    {children}
  </div>
)

export const HomepageHero = () => (
  <section
    sx={{
      width: "100%",
      backgroundColor: "blue",
      py: [6],
    }}
  >
    <AppLayout>
      <Flex direction="column" alignItems="flex-start" childMarginTop={[2]}>
        <HeroText>Jay Laiche</HeroText>
        <HeroText>Front-End Developer</HeroText>
      </Flex>
    </AppLayout>
  </section>
)
