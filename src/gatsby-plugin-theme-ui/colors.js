
const solarized_base03 = `#002b36`
const solarized_base02 = `#073642`
const solarized_base01 = `#586e75`
const solarized_base00 = `#657b83`
const solarized_base0 = `#839496`
const solarized_base1 = `#93a1a1`
const solarized_base2 = `#eee8d5`
const solarized_base3 = `#fdf6e3`
const solarized_yellow = `#b58900`
const solarized_orange = `#cb4b16`
const solarized_red = `#dc322f`
const solarized_magenta = `#d33682`
const solarized_violet = `#6c71c4`
const solarized_blue = `#268bd2`
const solarized_cyan = `#2aa198`
const solarized_green = `#859900`


export default {
  text: solarized_base00,
  heading: solarized_base00,
  background: solarized_base3,
  primary: solarized_yellow,
  secondary: solarized_cyan,
  muted: solarized_base0,
  highlight: solarized_base2,
  prism: {
    text: solarized_base0,
    background: solarized_base03,
    comment: solarized_base01,
    string: solarized_green,
    var: solarized_magenta,
    number: solarized_orange,
    constant: solarized_blue,
    punctuation: solarized_base0,
    className: solarized_yellow,
    tag: solarized_cyan,
    boolean: solarized_red,
    property: solarized_magenta,
    namespace: solarized_violet,
    highlight: solarized_base02,
  },
  modes: {
    dark: {
      text: solarized_base0,
      heading: solarized_base0,
      background: solarized_base03,
      primary: solarized_yellow,
      secondary: solarized_cyan,
      muted: solarized_base00,
      highlight: solarized_base02,
      prism: {
        text: solarized_base00,
        background:solarized_base3,
        comment: solarized_base1,
        highlight: solarized_base2,
        punctuation: solarized_base00,
      }
    },
  },
}


