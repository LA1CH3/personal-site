/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import { AppShell } from "../components/app"
import { Flex } from "../components/layout"
import { Link } from "../components/navigation"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <AppShell>
    <section>
      <Styled.h2 sx={{ mb: [4] }}>Blog Posts</Styled.h2>
      <Flex direction="column" childMarginTop={[2, 3, 4]}>
        {edges.map(({ node }) => (
          <section sx={{ marginBottom: [1, 2] }}>
            <Link to={`/blog/${node.fields.slug}`}>
              <h3
                sx={{
                  color: "text",
                  fontFamily: "heading",
                  fontSize: [2, 3],
                  lineHeight: [1.3],
                  marginBottom: [1, 2],
                  ":hover": {
                    color: "secondary",
                  },
                }}
              >
                {node.frontmatter.title}
              </h3>
            </Link>
            <Styled.p sx={{ fontStyle: "italic" }}>
              Published {node.frontmatter.date}
            </Styled.p>
            <Styled.p>{node.excerpt}</Styled.p>
          </section>
        ))}
      </Flex>
    </section>
  </AppShell>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
