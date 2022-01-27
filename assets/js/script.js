// Button element variables
let openMenu = document.getElementById("open_menu")
let btnConnect = document.getElementById("connect_btn")
let loginStatus = 0

// Component variable
let vMenu = document.querySelector(".v-menu")
let btnAvatar = document.querySelector(".user-avatar")
let wallet_address = null

// Chat send textarea auto resize function
const tx = document.getElementsByTagName("textarea")
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false)
}

function OnInput() {
  this.style.height = "auto"
  this.style.height = this.scrollHeight - 30 + "px"
}

PopoverComponent.init({
  ele: ".popover-demo",
})

openMenu.addEventListener("click", () => {
  if (getComputedStyle(vMenu).display == "none") {
    vMenu.style.display = "block"
  } else {
    vMenu.style.display = "none"
  }
})

btnConnect.addEventListener("click", () => {
  phantom_connect()
})

window.addEventListener("load", (event) => {
  loginStatus = 0
  btnAvatar.style.display = "none"
  btnConnect.innerText = "Connect wallet"
})

// Connect Phantom
function phantom_connect() {
  // Check for Solana & Phantom
  var provider = () => {
    if ("solana" in window) {
      var provider = window.solana
      if (provider.isPhantom) {
        return provider
      } else {
        return false
      }
    }
    window.open("https://phantom.app", "_blank")
  }

  function phantom_balance() {
    // alt window.solana
    const phantom = provider()
    phantom.connect()
    phantom.on("connect", async () => {
      console.log("Wallet Connected: " + phantom.isConnected)
      if (phantom.isConnected !== false) {
        wallet_address = phantom.publicKey.toString()
        if (wallet_address != null) {
          btnAvatar.style.display = "flex"
          btnConnect.innerText = "Deposit"
        }
      }
    })
  }
  var balance = phantom_balance()
  console.log(balance)
  // var phantom = provider()

  // if (phantom !== false) {
  //   console.log("Phantom Wallet Found, Connecting..")

  //   try {
  //     // Connect to Solana
  //     var connect_wallet = phantom.connect()

  //     // After Connecting
  //     phantom.on("connect", () => {
  //       // Check Connection
  //       console.log("Phantom Connected: " + phantom.isConnected)

  //       // Get Wallet Address
  //       var wallet_address = phantom.publicKey.toString()
  //       console.log("Solana Wallet Address: " + wallet_address)

  //       var connection = new solanaWeb3.Connection(
  //         solanaWeb3.clusterApiUrl("devnet"),
  //         "confirmed"
  //       )

  //       // remember, do not use base 58 encoded key with getBalance();
  //       console.log("Getting Balance: " + wallet_address)
  //       let _balance = await connection
  //         .getAccount(wallet)
  //         .getBalance(wallet)
  //         .then(function (data) {
  //           console.log("Wallet Balance: " + data)
  //           return data
  //         })
  //         .catch(function (error) {
  //           console.log(error)
  //           return error
  //         })

  //       // ********** THIS FAILS **********
  //       // Get Account Info
  //       // var account = phantom.request({
  //       //   jsonrpc: "2.0",
  //       //   method: "getAccountInfo",
  //       //   params: [
  //       //     wallet_address,
  //       //     {
  //       //       encoding: "jsonParsed",
  //       //     },
  //       //   ],
  //       // })
  //       // console.log("Solana Account Info:")
  //       // console.log(account)
  //       // ********************************

  //       // ********** THIS FAILS **********
  //       // Get Wallet Balance
  //       // var balance = phantom.request({
  //       //   jsonrpc: "2.0",
  //       //   id: 1,
  //       //   method: "getBalance",
  //       //   params: [wallet_address],
  //       // })
  //       // console.log("Solana Wallet Balance:")
  //       // console.log(balance)
  //       // ********************************
  //     })
  //     //
  //   } catch (err) {
  //     console.log("Connection Cancelled!")
  //   }
  // }
}
