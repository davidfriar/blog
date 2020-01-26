import merge from "deepmerge"
import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import typography from "./typography.js"
import colors from "./colors.js"
import prism from "./prism.js"

console.log('basetheme::::::::::::::::::::');
console.log(baseTheme);
console.log('typography::::::::::::::::::::');
console.log(typography);

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray
const combinedTheme = merge({
  ...baseTheme,
  initialColorMode: `dark`,
  colors: colors,
  prism: prism
}, typography, { arrayMerge: overwriteMerge })

console.log('combinedTheme::::::::::::::::::::');
console.log(combinedTheme);
export default combinedTheme
