/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"

import { AppShell } from "../components/app"
import { Flex } from "../components/layout"

const mainContentListStyles = {
  listStyleType: "none",
  "& > * + *": {
    paddingTop: [2],
  },
  paddingBottom: "64px",
}

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => (
  <AppShell>
    <section>
      <ul sx={mainContentListStyles}>
        <li>
          <Styled.h2>software engineer @ capital one</Styled.h2>
        </li>
        <li>
          <Styled.h2>located in richmond, va</Styled.h2>
        </li>
        <li>
          <Styled.h2>front-end development, design systems</Styled.h2>
        </li>
      </ul>
    </section>
    <Flex as="section" direction="column" childMarginTop={[1, 3]}>
      <Styled.h3 as="span">latest blog post</Styled.h3>
      {edges.map(({ node }) => (
        <Flex direction="column" childMarginTop={[1, 2, 3]}>
          <Link
            to={node.fields.slug}
            sx={{
              textTransform: "uppercase",
              color: "text",
              fontFamily: "heading",
              fontSize: [2, 3, 4, 5],
              ":hover": {
                color: "secondary",
              },
            }}
          >
            {node.frontmatter.title}
          </Link>
          <Styled.p>{node.frontmatter.date}</Styled.p>
        </Flex>
      ))}
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
          }
        }
      }
    }
  }
`
