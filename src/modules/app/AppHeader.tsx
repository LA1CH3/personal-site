/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

import { AppLayout } from "./AppLayout"
import { Divider } from "../../components/divider"

export const AppHeader = () => (
  <header
    sx={{
      width: "100%",
      paddingTop: [3],
    }}
  >
    <AppLayout>
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Styled.h1
          sx={{
            "&:before": {
              content: "'{'",
              color: "secondary",
              paddingRight: [4, 5],
            },
            "&:after": {
              content: "'}'",
              color: "secondary",
              paddingLeft: [4, 5],
            },
          }}
        >
          <Styled.a
            as={Link}
            to="/"
            sx={{
              fontWeight: "bold",
            }}
          >
            jay laiche
          </Styled.a>
        </Styled.h1>
        <Styled.h2>front-end developer</Styled.h2>
        <Divider />
      </div>
    </AppLayout>
  </header>
)
