chrome.storage.sync.get("mode", item => {
    console.log(item)
    if (item.mode == 'dark') {
        console.log(item)
        chrome.runtime.sendMessage({ mode: "dark" }, function (response) {
            console.log("HEELLLO")
            console.log(response.farewell);
        });
    } else {
        chrome.runtime.sendMessage({ mode: "light" }, function (response) {
            console.log(response.farewell);
        });
    }
})