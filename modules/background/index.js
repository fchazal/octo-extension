let url = 'https://script.google.com/a/macros/accenture.com/s/AKfycbxK96w2rVWfue3EUbCCd_DkNH1PkH3edHPMsVy2EuL1KWPfrYi3VZzzXVZhTfZyZTZE/exec'

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ active: true })

  chrome.identity.getProfileUserInfo(about => {
    fetch(url+'?email='+about.email)
    .then(response => response.json())
    .then(user => {
	    chrome.storage.sync.set({ 'user' : user })

      chrome.notifications.create(
        "octo- welcome",
        {
          type: "basic",
          title: "Welcome !",
          iconUrl: '/icons/icon_128.png',
          message: "Bienvenue " + user[1]
        }
      )
    })
  })
})
