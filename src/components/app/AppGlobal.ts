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
`
