import { css } from "@emotion/core"
import emotionReset from "emotion-reset"

/**
 * Global CSS styles
 *  Applied via emotion/core <Global> component
 */

export const globalStyles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h6,
  p {
    margin: 0;
  }

  *:focus {
    outline: 1px dotted black;
  }
`
