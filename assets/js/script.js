// Button element variables
let openChatBox = document.getElementById("open_chatbox");
let closeChatBox = document.getElementById("close_chatbox");
let openSideBar = document.getElementById("btn_sidebar");
let openMenu = document.getElementById("open_menu");

// Component variable
let chatBox = document.querySelector(".chat-box");
let main = document.querySelector(".main");
let sideBar = document.querySelector(".sidebar");
let vMenu = document.querySelector(".v-menu");

// Chat send textarea auto resize function
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight - 30 + "px";
}

// Chatbox hide and show function
openChatBox.addEventListener("click", () => {
  if (getComputedStyle(chatBox).right == "0px") {
    chatBox.style.right = "-30rem";
    if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)";
    else main.style.width = "calc(100% - 118px)";
  } else {
    chatBox.style.right = "0rem";
    if (window.innerWidth > 1366) main.style.width = "calc(100% - 440px)";
    else if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)";
    else main.style.width = "calc(100% - 118px)";
  }
});

closeChatBox.addEventListener("click", () => {
  chatBox.style.right = "-30rem";
  if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)";
  else main.style.width = "calc(100% - 118px)";
});

// Sidebar hide and show function
openSideBar.addEventListener("click", () => {
  if (getComputedStyle(sideBar).display == "flex") {
    sideBar.style.display = "none";
    main.style.width = "calc(100% - 48px)";
    main.style.left = "0px";
  } else {
    sideBar.style.display = "flex";
  }
});

openMenu.addEventListener("click", () => {
  if (getComputedStyle(vMenu).display == "none") {
    vMenu.style.display = "block";
  } else {
    vMenu.style.display = "none";
  }
});

// Checkout
