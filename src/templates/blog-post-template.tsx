/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import { AppShell } from "../components/app"
import { Flex } from "../components/layout"
import { BlogHero, BlogPostContent } from "../components/blog"

const BlogPostPage = ({ data: { mdx } }) => (
  <AppShell>
    <Flex
      as="article"
      direction="column"
      childMarginTop={[5]}
      alignItems="flex-start"
      width="100%"
    >
      <BlogHero title={mdx.frontmatter.title} />
      <BlogPostContent date={mdx.frontmatter.date} postBody={mdx.body} />
    </Flex>
  </AppShell>
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
