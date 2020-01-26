import "typeface-work-sans"
import "typeface-quattrocento-sans"
import "typeface-roboto-mono"
import { toTheme } from "@theme-ui/typography"
import typography from "typography-theme-fairy-gates"

const theme = toTheme(typography)
theme.fonts.monospace = "Roboto Mono"
export default theme
