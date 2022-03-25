
style = document.createElement("style");
style.setAttribute("id", "custom-style-code");
style.setAttribute("type", "text/css");
style.textContent = `
.gb_wc.gb_ma.gb_pa { content: url(${chrome.extension.getURL('/src/assets/logo.png')}) }

#confetti-canvas	 {
	position: fixed;
	z-index: 1999;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
`;

document.documentElement.appendChild(style);
