/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import { AppShell } from "../components/app"
import { Flex } from "../components/layout"
import { BlogHero, BlogContent } from "../components/blog"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <AppShell>
    <Flex
      as="article"
      direction="column"
      childMarginTop={[5]}
      alignItems="flex-start"
      width="100%"
    >
      <BlogHero />
      <BlogContent posts={edges} />
    </Flex>
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
