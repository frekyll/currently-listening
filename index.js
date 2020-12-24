const css = require('sheetify')
const html = require('nanohtml')

const prefix = css`
  :host > h1 {
    text-align: center;
  }
`

const tree = html`
  <section class=${prefix}>
    <h1>Hello, world!</h1>
  </section>
`

document.body.appendChild(tree)
