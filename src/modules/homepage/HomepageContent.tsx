/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

import { AppLayout } from "../app/AppLayout"
import { Flex } from "../../components/layout/Flex"

export const HomepageContent = ({ posts }) => (
  <section
    sx={{
      width: "100%",
    }}
  >
    <AppLayout>
      <Flex direction="row" justifyContent="center">
        <Styled.h3 sx={{ marginBottom: [4, 5] }}>latest blog posts</Styled.h3>
      </Flex>
      <Flex direction="column" childMarginTop={[2]}>
        {posts.map(({ node }, i) => (
          <Flex key={i} direction="column">
            <Styled.h4
              sx={{
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              <Styled.a as={Link} to={node.fields.slug}>
                {node.frontmatter.title}
              </Styled.a>
            </Styled.h4>
            <p
              sx={{
                textAlign: "center",
                fontSize: [0, 1],
                fontFamily: "body",
              }}
            >
              {node.frontmatter.date}
            </p>
          </Flex>
        ))}
      </Flex>
    </AppLayout>
  </section>
)
