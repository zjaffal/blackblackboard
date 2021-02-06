chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ mode: 'dark' }, function () {
    });
    chrome.tabs.insertCSS({"file": "blake.css"}, () => console.log("insertedCSS"))
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'online.manchester.ac.uk' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});