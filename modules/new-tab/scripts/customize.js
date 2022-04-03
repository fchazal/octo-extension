let Accents = {
	add: (name) => {
		let container = document.querySelector('#colors>ul')

		let item = document.createElement('li')
		item.style['background-color'] = `var(--octo-${name}-1)`

		item.addEventListener('click', () => {
			Accents.set(name)
			chrome.storage.sync.set({ 'accent' : name })
		})

		container.append(item)
	},

	addMultiple: (names) => { names.forEach(Accents.add) },

	set: (name) => {
		let back = document.querySelector('svg#background>#back')
		back.setAttribute('fill', `var(--octo-${name}-1)`)
	
		let cross = document.querySelector('svg#background>#cross')
		cross.setAttribute('fill', `var(--octo-${name}-2)`)
	}
}

let Mottos = {
	add: (name) => {
		let container = document.querySelector('#mottos>ul')
	
		let item = document.createElement('li')
		item.className = name
	
		item.addEventListener('click', () => {
			Mottos.set(name)
			chrome.storage.sync.set({ 'motto' : name })
		})
	
		container.append(item)
	},

	addMultiple: (names) => { names.forEach(Mottos.add) },

	set: (name) => {
		let back = document.querySelector('div#background')
		back.className = name
	}
}

// Add colors
Accents.addMultiple(['darkblue', 'lightblue', 'turquoise', 'green', 'yellow', 'orange', 'red', 'purple'])

// Add mottos
Mottos.addMultiple(['motto-1', 'motto-2', 'motto-3', 'motto-4', 'motto-5', 'motto-6'])

// Add customization toggle
document.querySelector('#customizePage').onclick = () => {
	document.body.classList.toggle('customization')
}

// Set preferences
chrome.storage.sync.get([ 'accent', 'motto' ], data => {
	Accents.set(data['accent'])
	Mottos.set(data['motto'])
})
	