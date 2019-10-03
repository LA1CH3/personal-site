import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { AppShell } from "../modules/app"
import { HomepageContent } from "../modules/homepage"
import { Flex } from "../components/layout"

const siteTitle = "jay laiche - front-end developer"

const siteDesc = "Personal blog for Jay Laiche, front-end developer"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <Fragment>
    <Helmet title={siteTitle} description={siteDesc} />
    <AppShell>
      <Flex
        as="article"
        direction="column"
        alignItems="flex-start"
        width="100%"
      >
        <HomepageContent posts={edges} />
      </Flex>
    </AppShell>
  </Fragment>
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
          }
        }
      }
    }
  }
`
