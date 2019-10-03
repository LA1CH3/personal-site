/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"

import { AppLayout } from "../app/AppLayout"
import { Flex } from "../../components/layout"

import { colorModesKeys } from "../../gatsby-plugin-theme-ui"

export const AppFooter = () => {
  const [colorMode, setColorMode] = useColorMode()

  const colorModes = Array.from(colorModesKeys)

  return (
    <footer
      sx={{
        marginTop: [3],
        py: [3],
        width: "100%",
      }}
    >
      <AppLayout>
        <Flex
          direction={["column", "row"]}
          childMarginTop={[3, 0]}
          justifyContent={[null, "space-between"]}
          alignItems={["flex-end"]}
        >
          <Flex as="ul" childMarginLeft={[4]}>
            <li>
              <Styled.a
                as="a"
                href="https://github.com/la1ch3"
                target="_blank"
                rel="noopener"
              >
                Github
              </Styled.a>
            </li>
            <li>
              <Styled.a
                as="a"
                href="https://www.linkedin.com/in/jaylaiche/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </Styled.a>
            </li>
            <li>
              <Styled.a
                as="a"
                href="mailto:jay@jaylaiche.com"
                target="_blank"
                rel="noopener"
              >
                Email
              </Styled.a>
            </li>
          </Flex>
          <button
            sx={{
              backgroundColor: "background",
              borderWidth: "3px",
              borderColor: "text",
              borderStyle: "solid",
              fontFamily: "body",
              fontSize: 0,
              color: "text",
              padding: 1,
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "text",
                color: "background",
              },
            }}
            onClick={() => {
              let newColorMode

              if (colorModes.indexOf(colorMode) === colorModes.length - 1) {
                newColorMode = colorModes[0]
              } else {
                newColorMode = colorModes[colorModes.indexOf(colorMode) + 1]
              }

              setColorMode(newColorMode)
            }}
          >
            Change Theme
          </button>
        </Flex>
      </AppLayout>
    </footer>
  )
}
