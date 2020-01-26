// Colours from Solarized. See https://ethanschoonover.com/solarized/

const base03 = `#002b36`
const base02 = `#073642`
const base01 = `#586e75`
const base00 = `#657b83`
const base0 = `#839496`
const base1 = `#93a1a1`
const base2 = `#eee8d5`
const base3 = `#fdf6e3`
const yellow = `#b58900`
const orange = `#cb4b16`
const red = `#dc322f`
const magenta = `#d33682`
const violet = `#6c71c4`
const blue = `#268bd2`
const cyan = `#2aa198`
const green = `#859900`

export default {
  text: base00,
  heading: base00,
  background: base3,
  primary: yellow,
  secondary: cyan,
  muted: base0,
  highlight: base2,
  prism: {
    text: base0,
    background: base03,
    comment: base01,
    string: green,
    var: magenta,
    number: orange,
    constant: blue,
    punctuation: base0,
    className: yellow,
    tag: cyan,
    boolean: red,
    property: magenta,
    namespace: violet,
    highlight: base02,
  },
  modes: {
    dark: {
      text: base0,
      heading: base0,
      background: base03,
      primary: yellow,
      secondary: cyan,
      muted: base00,
      highlight: base02,
      prism: {
        text: base00,
        background: base3,
        comment: base1,
        highlight: base2,
        punctuation: base00,
      },
    },
  },
}
