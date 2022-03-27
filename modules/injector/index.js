
function injectCSS(css) {
  style = document.createElement('style')
  style.setAttribute('id', 'custom-style-code')
  style.setAttribute('type', 'text/css')
  style.textContent = css

  document.documentElement.appendChild(style)
}

injectCSS(`
.gb_wc.gb_ma.gb_pa { content: url(${chrome.extension.getURL('/src/assets/google-logo.png')}) }

#confetti-canvas	 {
  position: fixed;
  z-index: 1999;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
`)
