/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { AppLayout } from "../../app/AppLayout"
import { Flex } from "../../layout/Flex"
import { Link } from "../../navigation/Link"

export const HomepageContent = ({ posts }) => (
  <section
    sx={{
      width: "100%",
      py: [2],
    }}
  >
    <AppLayout>
      <Styled.h2
        sx={{
          marginBottom: [4],
        }}
      >
        Latest Blog Posts
      </Styled.h2>
      <Flex direction="column" childMarginTop={[2]}>
        {posts.map(({ node }) => (
          <Flex direction="column" childMarginTop={[2]}>
            <Styled.h3 sx={{ fontFamily: "body" }}>
              <Link to={`/blog/${node.fields.slug}`}>
                {node.frontmatter.title}
              </Link>
            </Styled.h3>
            <Styled.p>{node.frontmatter.date}</Styled.p>
          </Flex>
        ))}
      </Flex>
    </AppLayout>
  </section>
)
