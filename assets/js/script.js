// Button element variables
let openChatBox = document.getElementById("open_chatbox")
let closeChatBox = document.getElementById("close_chatbox")
let openMenu = document.getElementById("open_menu")
let btnConnect = document.getElementById("connect_btn")
let loginStatus = 0

// Component variable
let chatBox = document.querySelector(".chat-box")
let main = document.querySelector(".main")
let sideBar = document.querySelector(".sidebar")
let vMenu = document.querySelector(".v-menu")
let btnAvatar = document.querySelector(".user-avatar")

// Chat send textarea auto resize function
const tx = document.getElementsByTagName("textarea")
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false)
}

function OnInput() {
  this.style.height = "auto"
  this.style.height = this.scrollHeight - 30 + "px"
}

// Chart data get function
function getData() {
  return [
    ["0", 16.9, 12.2],
    ["1", 17, 17.8],
    ["2", 26.5, 23.8],
    ["3", 28.7, 22],
    ["4", 35.7, 24],
    ["5", 37.2, 24.6],
    ["6", 36.5, 26.2],
    ["7", 40, 34.4],
  ]
}

PopoverComponent.init({
  ele: ".popover-demo",
})

// Chatbox hide and show function
openChatBox.addEventListener("click", () => {
  if (getComputedStyle(chatBox).right == "0px") {
    chatBox.style.right = "-30rem"
    if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
    else main.style.width = "calc(100% - 118px)"
  } else {
    chatBox.style.right = "0rem"
    if (window.innerWidth > 1366) main.style.width = "calc(100% - 440px)"
    else if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
    else main.style.width = "calc(100% - 118px)"
  }
})

closeChatBox.addEventListener("click", () => {
  chatBox.style.right = "-30rem"
  if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
  else main.style.width = "calc(100% - 118px)"
})

openMenu.addEventListener("click", () => {
  if (getComputedStyle(vMenu).display == "none") {
    vMenu.style.display = "block"
  } else {
    vMenu.style.display = "none"
  }
})

btnConnect.addEventListener("click", () => {
  loginStatus = 1
  btnAvatar.style.display = "flex"
  btnConnect.innerText = "Deposit"
})

window.addEventListener("load", (event) => {
  loginStatus = 0
  btnAvatar.style.display = "none"
  btnConnect.innerText = "Connect wallet"
})
