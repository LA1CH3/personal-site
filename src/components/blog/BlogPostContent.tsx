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
      <Flex direction="column" childMarginTop={[2]}>
        <Styled.p
          sx={{
            marginBottom: [4],
          }}
        >
          {date}
        </Styled.p>
        <MDXRenderer>{postBody}</MDXRenderer>
      </Flex>
    </AppLayout>
  </section>
)
