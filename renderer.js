// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote
const Menu = remote.Menu
const MenuItem = remote.MenuItem

let menu = new Menu()

menu.append(new MenuItem({ label: 'Copy' }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'Help', type: 'checkbox', checked: true }))

// Show when window is right-clicked
window.addEventListener('contextmenu', function (e) {
  e.preventDefault()
  menu.popup(remote.getCurrentWindow())
}, false)

// Show when demo button is clicked
const contextMenuBtn = document.getElementById('context-menu')
contextMenuBtn.addEventListener('click', function () {
  menu.popup(remote.getCurrentWindow())
})