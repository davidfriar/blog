import basePrism from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/prism.js"
import merge from "deepmerge"

export default merge(basePrism, {
  ".comment": {
    fontStyle: `italic`,
  },
  ".plain, .property-access, .parameter": {
    color: `text`,
  },
})
