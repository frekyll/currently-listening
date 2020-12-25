const css = require('sheetify')
const html = require('nanohtml')

css('tachyons')

const albumData = require('./albums.json')

var siteData = {
  profileLink: 'https://www.frekyll.com'
}

const globalStyle = css`
  body {
    background-color: #a29393;
  }
`

function mainView () {
  return html`
    <div class="avenir pa3 white">
      ${header()}
      <div class="center cf mw8">
        <div class="nl2 nr2 nl3-m nr3-m">
          ${albums()}
        </div>
      </div>
      ${footer()}
    </div>
  `
}

function header () {
  return html`
    <h1 class="f2 fw4 mb5 mt0">
      <a class="black-50 dim link" href="${siteData.profileLink}">Frekyll</a> is currently listening to
    </h1>
  `
}

function albums () {
  return html`
    <div>
      ${albumData.map(album)}
    </div>
  `
  function album (data) {
    return html`
      <div class="fl pa2 pa3-m pa4-l w-50">
        <a class="db dim link tc" href="${data.link}">
          <img alt="${data.album}" class="black-20 db shadow-3" src="${data.image}">
          <dl class="f6 lh-copy mt2 white">
            <dt class="fw6 ml0 truncate w-100">${data.album}</dt>
            <dd class="ml0 truncate w-100">${data.artist}</dd>
          </dl>
        </a>
      </div>
    `
  }
}

function footer () {
  return html`
    <footer class="mt5 tr-ns">
      <p class="mb0 mt0">Made with love in Kalamazoo by Josh</p>
    </footer>
  `
}

document.body.appendChild(mainView())
