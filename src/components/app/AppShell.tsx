/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import React, { Fragment } from "react"
import { Global } from "@emotion/core"

import { globalStyles } from "./AppGlobal"
import theme from "../../gatsby-plugin-theme-ui"

import { AppRoot } from "./AppRoot"
import { AppHeader } from "./AppHeader"
import { AppContent } from "./AppContent"
import { AppFooter } from "./AppFooter"

export const AppShell = ({ children }) => (
  <Fragment>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <AppRoot>
        <AppHeader />
        <AppContent>{children}</AppContent>
        <AppFooter />
      </AppRoot>
    </ThemeProvider>
  </Fragment>
)
