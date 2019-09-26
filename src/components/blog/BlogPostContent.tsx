/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { AppLayout } from "../app/AppLayout"
import { Flex } from "../layout/Flex"

export const BlogPostContent = ({ postBody, date }) => (
  <section
    sx={{
      width: "100%",
      px: [2],
    }}
  >
    <AppLayout>
      <Flex direction="column">
        <MDXRenderer>{postBody}</MDXRenderer>
      </Flex>
    </AppLayout>
  </section>
)
