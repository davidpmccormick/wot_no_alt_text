chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    file: 'toggle.js'
  });
});
