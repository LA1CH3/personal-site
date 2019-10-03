/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { AppLayout } from "../app/AppLayout"
import { Flex } from "../../components/layout/Flex"

export const BlogPostContent = ({ postBody, title, date }) => (
  <section
    sx={{
      width: "100%",
    }}
  >
    <AppLayout>
      <Flex direction="column">
        <Flex direction="row" justifyContent="center">
          <Styled.h3 sx={{ marginBottom: [2] }}>{title}</Styled.h3>
        </Flex>
        <p
          sx={{
            fontFamily: "body",
            marginBottom: [4, 5, 6],
            textAlign: "center",
          }}
        >
          {date}
        </p>
        <div
          sx={{
            width: "100%",
          }}
        >
          <MDXRenderer>{postBody}</MDXRenderer>
        </div>
      </Flex>
    </AppLayout>
  </section>
)
