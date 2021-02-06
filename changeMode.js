let changeColor = document.getElementById('changeMode');
chrome.storage.sync.get('mode', data => {
    changeColor.setAttribute('value', data.mode)
})

changeColor.onclick = element => {
    mode = element.target.value
    if (mode == 'dark'){
        chrome.tabs.insertCSS({"file": "blake.css"}, () => console.log("insertedCSS"))
    }
}