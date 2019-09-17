/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { AppShell } from "../components/app"

const mainContentListStyles = {
  listStyleType: "none",
  "& > * + *": {
    paddingTop: [1],
  },
}

const IndexPage = () => (
  <AppShell>
    <ul sx={mainContentListStyles}>
      <li>
        <p>Software Engineer @ Capital One</p>
      </li>
      <li>
        <p>Located in Richmond, VA</p>
      </li>
      <li>
        <p>Focusing on design systems engineering</p>
      </li>
    </ul>
  </AppShell>
)

export default IndexPage
