/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { AppShell } from "../components/app"

const mainContentListStyles = {
  listStyleType: "none",
  "& > * + *": {
    paddingTop: [2],
  },
}

const IndexPage = () => (
  <AppShell>
    <ul sx={mainContentListStyles}>
      <li>
        <Styled.h2>Software Engineer @ Capital One</Styled.h2>
      </li>
      <li>
        <Styled.h2>Located in Richmond, VA</Styled.h2>
      </li>
      <li>
        <Styled.h2>Front-end development, design systems</Styled.h2>
      </li>
    </ul>
  </AppShell>
)

export default IndexPage
