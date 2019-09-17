import React, { Fragment } from "react"
import { Global } from "@emotion/core"

import { globalStyles } from "./AppGlobal"

import { AppRoot } from "./AppRoot"
import { AppHeader } from "./AppHeader"
import { AppContent } from "./AppContent"
import { AppFooter } from "./AppFooter"

export const AppShell = ({ children }) => (
  <Fragment>
    <Global styles={globalStyles} />
    <AppRoot>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </AppRoot>
  </Fragment>
)
