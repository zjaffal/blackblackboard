chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ mode: 'light' }, function () {
    });
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


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.mode == "light") {
            chrome.tabs.removeCSS(null, { "file": "blake.css"}, () => console.log("insertedCSS"))
            sendResponse({ farewell: "goodbye" });
        } else if (request.mode == "dark") {
            chrome.tabs.insertCSS(null, { "file": "blake.css", runAt: "document_start"}, () => console.log("insertedCSS"))
            sendResponse({ farewell: "goodbye" });
            console.log(chrome.tabs.getCurrent)
        }
    }
);