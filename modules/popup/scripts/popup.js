
function createItem(label, id) {
	let item = document.createElement('div')
	item.setAttribute('id', id)
	item.setAttribute('class', 'item')
	item.innerHTML = `
		<span class="label">${label}</span>
		<span class="check">
			<input type="checkbox" id="check-${id}" /><label for="check-${id}"></label>
		</span>
	`
	
	let checkbox = item.querySelector(`#check-${id}`)

	checkbox.addEventListener('change', () => {
		let memory = {}
		memory[id] = checkbox.checked
		chrome.storage.sync.set(memory)
	})

	chrome.storage.sync.get([ id ], result => {
		checkbox.checked = result[id]
		document.body.appendChild(item)
	})
}

createItem('Enable custom google theme ?', 'injector')