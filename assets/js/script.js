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
let openChatBox = document.getElementById("open_chatbox");
let closeChatBox = document.getElementById("close_chatbox");
let chatBox = document.querySelector(".chat-box");
let main = document.querySelector(".main");
let arrow = document.getElementById("btn_arrow");
let arrowBtn = document.querySelector("#btn_arrow");
let arrowIcon = document.getElementById("arrow_icon");
let openSideBar = document.getElementById("btn_sidebar");
let sideBar = document.querySelector(".sidebar");
let openMenu = document.getElementById("open_menu");
let vMenu = document.querySelector(".v-menu");

openChatBox.addEventListener("click", () => {
  if (getComputedStyle(chatBox).display == "flex") {
    chatBoxClose();
  } else {
    chatBox.style.display = "flex";
    main.style.width = "calc(100% - 440px)";
  }
});

closeChatBox.addEventListener("click", chatBoxClose);

function chatBoxClose() {
  chatBox.style.display = "none";
  main.style.width = "calc(100% - 118px)";
  arrowBtn.style.display = "none";
}

arrow.addEventListener("click", () => {
  if (getComputedStyle(chatBox).right == "-320px") {
    chatBox.style.right = "1rem";
    arrowBtn.style.right = "315px";
    main.style.width = "calc(100% - 118px)";
    arrowIcon.classList.remove("fa-arrow-left");
    arrowIcon.classList.add("fa-arrow-right");
  } else {
    chatBox.style.right = "-320px";
    arrowBtn.style.right = "0px";
    arrowIcon.classList.add("fa-arrow-left");
    arrowIcon.classList.remove("fa-arrow-right");
  }
});

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
