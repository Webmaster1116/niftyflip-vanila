// Button element variables
let openMenu = document.getElementById("open_menu");
let btnConnect = document.getElementById("connect_btn");
let loginStatus = 0;

// Component variable
let vMenu = document.querySelector(".v-menu");
let btnAvatar = document.querySelector(".user-avatar");

// Chat send textarea auto resize function
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight - 30 + "px";
}

PopoverComponent.init({
  ele: ".popover-demo",
});

openMenu.addEventListener("click", () => {
  if (getComputedStyle(vMenu).display == "none") {
    vMenu.style.display = "block";
  } else {
    vMenu.style.display = "none";
  }
});

btnConnect.addEventListener("click", () => {
  // phantom_connect()
  btnAvatar.style.display = "flex";
  btnConnect.innerText = "Deposit";
});

window.addEventListener("load", (event) => {
  loginStatus = 0;
  btnAvatar.style.display = "none";
  btnConnect.innerText = "Connect wallet";
});

function phantom_connect() {
  const provider = window.solana;
  const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl("devnet"),
    "confirmed"
  );
  // After Connecting
  connection.getBalance(provider.publicKey).then(function (value) {
    console.log(value);
  });
}
