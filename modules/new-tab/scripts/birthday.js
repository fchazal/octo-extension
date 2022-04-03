chrome.storage.sync.get([ 'user'], data => {
	let date = new Date(data['user'][3])
	date.setHours(0,0,0,0)
	date.setFullYear(0)

	let now = new Date()
	now.setHours(0,0,0,0)
	now.setFullYear(0)

	if (now.valueOf() == date.valueOf()) {
		startConfetti()
	}
})