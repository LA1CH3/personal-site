/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"

import { AppShell } from "../components/app"
import { Flex } from "../components/layout"
import { HomepageHero, HomepageContent } from "../components/homepage"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <AppShell>
    <Flex
      as="article"
      direction="column"
      childMarginTop={[2]}
      alignItems="flex-start"
      width="100%"
    >
      <HomepageHero />
      <HomepageContent posts={edges} />
    </Flex>
  </AppShell>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
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
