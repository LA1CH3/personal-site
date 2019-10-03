/** @jsx jsx */
import React, { Fragment } from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { AppShell } from "../modules/app"
import { Flex } from "../components/layout"
import { BlogPostContent } from "../modules/blog"

const titleTemplate = "%s | jay laiche - front-end developer"

const BlogPostPage = ({ data: { mdx } }) => (
  <Fragment>
    <Helmet
      titleTemplate={titleTemplate}
      title={mdx.frontmatter.title.toLowerCase()}
    />
    <AppShell>
      <Flex
        as="article"
        direction="column"
        alignItems="flex-start"
        width="100%"
      >
        <BlogPostContent
          title={mdx.frontmatter.title}
          date={mdx.frontmatter.date}
          postBody={mdx.body}
        />
      </Flex>
    </AppShell>
  </Fragment>
)

export default BlogPostPage

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
