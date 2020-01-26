import merge from "deepmerge"
import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import typography from "./typography.js"
import colors from "./colors.js"
import prism from "./prism.js"

const overwriteMerge = (destinationArray, sourceArray) => sourceArray

export default merge(
  {
    ...baseTheme,
    initialColorMode: `dark`,
    colors: colors,
    prism: prism,
  },
  typography,
  { arrayMerge: overwriteMerge }
)
