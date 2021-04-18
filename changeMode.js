let changeColor = document.getElementById('changeMode');
chrome.storage.sync.get('mode', data => {
    changeColor.setAttribute('value', data.mode)
})

changeColor.onclick = element => {
    mode = element.target.value
    if (mode == 'dark'){

        localStorage.setItem("mode", "light")
        chrome.storage.sync.set({ mode: 'light' }, function () {
        });
        changeColor.setAttribute('value', 'light')
        changeColor.innerText = "Toggle dark mode on"
        chrome.tabs.reload()

    }else {
        localStorage.setItem("mode", "light")
        chrome.storage.sync.set({ mode: 'dark' }, function () {
        });
        changeColor.setAttribute('value', 'dark')
        changeColor.innerText = "Toggle light mode on"
        chrome.tabs.reload()

    }
}