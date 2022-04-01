let button = document.createElement('button')
document.body.appendChild(button)

button.addEventListener('click', () => {
	chrome.storage.sync.get(['injector'], result => {
		let value = result['injector'] ? false : true
		chrome.storage.sync.set({ 'injector': value })
		button.innerHTML = value
	})
})

chrome.storage.sync.get(['injector'], result => {
	button.innerHTML = result['injector']
})
