import { resizedrag } from './resizedrag.js'

function onStart(target, x, y) {
}

function onEnd(target, x, y) {
	readMemory(value => {
		let new_value = value || {}
		new_value[target.id] = { x, y }
		saveMemory(new_value)
	})
}

function addNote(id=null, x=0, y=0) {
	let note = document.createElement('div')
	note.classList = 'note'
	note.id = id ? id : Date.now()
	document.body.appendChild(note)

	note.style.top = y+'px'
	note.style.left = x+'px'
	resizedrag(note, note, onStart, onEnd)
}

document.querySelector('#addNote').addEventListener('click', addNote)

function readMemory(cbk) {
	chrome.storage.sync.get(['notes'], result => cbk(result['notes']))
}

function saveMemory(value) {
	chrome.storage.sync.set({ 'notes': value })
}

readMemory(notes => {
	for (let id in notes) {
		console.log(id)
		addNote(id, notes[id].x, notes[id].y)
	}
})