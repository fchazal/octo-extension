chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ active: true })

  chrome.identity.getProfileUserInfo(about => {
    chrome.notifications.create(
      "octo- welcome",
      {
        type: "basic",
        title: "Welcome !",
        iconUrl: '/icons/icon_128.png',
        message: "Bienvenue chez OCTO " + about.email
      }
    )
  })
})
