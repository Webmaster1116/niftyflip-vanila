// Chat send textarea auto resize function
const tx = document.getElementsByTagName("textarea")
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  )
  tx[i].addEventListener("input", OnInput, false)
}

function OnInput() {
  this.style.height = "auto"
  this.style.height = this.scrollHeight + "px"
}

// Chatbox hide and show function
let openChatBox = document.getElementById("open_chatbox")
let chatBox = document.querySelector(".chat-box")
let main = document.querySelector(".main")
openChatBox.addEventListener("click", displayChatBox)

function displayChatBox() {
  if (getComputedStyle(chatBox).display == "flex") {
    chatBox.style.display = "none"
    main.style.width = "calc(100% - 118px)"
  } else {
    chatBox.style.display = "flex"
    main.style.width = "calc(100% - 440px)"
  }
}
