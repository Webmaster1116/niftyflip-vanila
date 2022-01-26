class Router {
  constructor(routes) {
    this.routes = routes
    this._loadInitialRoute()
  }

  loadRoute(...urlSegments) {
    console.log(urlSegments)
    // Attempt to match the URL to a route.
    const matchedRoute = this._matchUrlToRoute(urlSegments)
    console.log(matchedRoute)
    // Push a history entry with the new URL.
    // We pass an empty object and an empty string as the historyState
    // and title arguments, but their values do not really matter here.
    const url = `/${urlSegments.join("/")}`
    console.log(url)
    history.pushState({}, "", url)
    // Append the template of the matched route to the DOM,
    // inside the element with attribute data-router-outlet.
    const routerOutletElement = document.querySelectorAll(
      "[data-router-outlet]"
    )[0]
    routerOutletElement.innerHTML = matchedRoute.template

    // Sidebar hide and show function
    let openSideBar = document.getElementById("btn_sidebar")
    let openChatBox = document.getElementById("open_chatbox")
    let closeChatBox = document.getElementById("close_chatbox")
    let chatBox = document.querySelector(".chat-box")
    let main = document.querySelector(".main")
    let checkout = document.querySelector(".checkout")
    let sideBar = document.querySelector(".sidebar")

    if (url == "/") {
      // Chatbox hide and show function
      openChatBox.addEventListener("click", () => {
        if (getComputedStyle(chatBox).right == "0px") {
          chatBox.style.right = "-30rem"
          if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
          else main.style.width = "calc(100% - 118px)"
        } else {
          chatBox.style.right = "0rem"
          if (window.innerWidth > 1366) main.style.width = "calc(100% - 440px)"
          else if (window.innerWidth < 680)
            main.style.width = "calc(100% - 48px)"
          else main.style.width = "calc(100% - 118px)"
        }
      })

      closeChatBox.addEventListener("click", () => {
        chatBox.style.right = "-30rem"
        if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
        else main.style.width = "calc(100% - 118px)"
      })

      // Modal hide and show function
      let btnSpectate = document.getElementsByClassName("spectate")
      let btnJoin = document.getElementsByClassName("join")
      let btnSol = document.getElementsByClassName("sol")
      let btnGameCreate = document.getElementById("btn_create")
      let closeSpectateModal = document.getElementById("close_spectate")
      let closeJoinModal = document.getElementById("close_join")
      let closeSolModal = document.getElementById("close_sol")
      let closeCreateModal = document.getElementById("close_create")
      const spectateModal = document.getElementsByClassName("specate-modal")[0]
      const joinModal = document.getElementsByClassName("join-modal")[0]
      const solModal = document.getElementsByClassName("sol-modal")[0]
      const gameCreateModal = document.getElementsByClassName("game-modal")[0]

      openSideBar.addEventListener("click", () => {
        if (getComputedStyle(sideBar).display == "flex") {
          sideBar.style.display = "none"
          main.style.width = "calc(100% - 48px)"
          main.style.left = "0px"
        } else {
          sideBar.style.display = "flex"
        }
      })

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

      const spectateChart = () => {
        // Clear modal
        while (document.getElementById("chart_panel").hasChildNodes()) {
          document
            .getElementById("chart_panel")
            .removeChild(document.getElementById("chart_panel").firstChild)
        }

        // Draw chart
        var dataSet = anychart.data.set(getData())
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 })
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 })

        var chart = anychart.line()
        chart.background().fill("transparent")
        chart.xScale().mode("continuous")

        var xlabels = chart.xAxis().labels()
        xlabels.enabled(false)

        var firstSeries = chart.line(firstSeriesData)
        firstSeries.name("A")

        var secondSeries = chart.line(secondSeriesData)
        secondSeries.name("B")

        chart.legend().enabled(false)
        chart.container("chart_panel")
        chart.draw()

        // Display modal
        spectateModal.classList.toggle("toggle-modal")
      }

      const joinModalFunc = () => {
        // Display modal
        joinModal.classList.toggle("toggle-modal")
      }

      const solModalFunc = () => {
        // Display modal
        solModal.classList.toggle("toggle-modal")
      }

      const gameCreateModalFunc = () => {
        // Display modal
        gameCreateModal.classList.toggle("toggle-modal")
      }

      // Get spectate button click event
      for (let i = 0; i < btnSpectate.length; i++) {
        btnSpectate[i].addEventListener("click", spectateChart, false)
      }

      for (let i = 0; i < btnJoin.length; i++) {
        btnJoin[i].addEventListener("click", joinModalFunc, false)
      }

      for (let i = 0; i < btnSol.length; i++) {
        btnSol[i].addEventListener("click", solModalFunc, false)
      }

      btnGameCreate.addEventListener("click", gameCreateModalFunc, false)

      closeSpectateModal.addEventListener("click", () => {
        spectateModal.classList.toggle("toggle-modal")
      })

      closeJoinModal.addEventListener("click", () => {
        joinModal.classList.toggle("toggle-modal")
      })

      closeSolModal.addEventListener("click", () => {
        solModal.classList.toggle("toggle-modal")
      })

      closeCreateModal.addEventListener("click", () => {
        gameCreateModal.classList.toggle("toggle-modal")
      })
    } else {
      // Button element variables
      let closeCheckout = document.getElementById("close_checkout")
      let withDrawPanel = document.querySelector(".withdraw-panel")

      // Chatbox hide and show function
      openChatBox.addEventListener("click", () => {
        if (getComputedStyle(chatBox).right == "0px") {
          chatBox.style.right = "-30rem"
          if (window.innerWidth > 1366) {
            checkout.style.right = "10rem"
            main.style.width = "calc(100% - 118px)"
          } else if (window.innerWidth < 680)
            main.style.width = "calc(100% - 48px)"
          else {
            main.style.width = "calc(100% - 118px)"
            checkout.style.right = "1.5rem"
          }
        } else {
          chatBox.style.right = "0rem"
          if (window.innerWidth > 1366) {
            main.style.width = "calc(100% - 440px)"
            checkout.style.right = "calc(300px + 10rem)"
          } else if (window.innerWidth < 680)
            main.style.width = "calc(100% - 48px)"
          else {
            main.style.width = "calc(100% - 118px)"
            checkout.style.right = "calc(300px + 1.5rem)"
          }
        }
      })

      closeChatBox.addEventListener("click", () => {
        chatBox.style.right = "-30rem"
        if (window.innerWidth < 680) main.style.width = "calc(100% - 48px)"
        else main.style.width = "calc(100% - 118px)"
      })

      openSideBar.addEventListener("click", () => {
        let titleElement = document.getElementsByClassName("title")
        if (getComputedStyle(sideBar).display == "flex") {
          sideBar.style.display = "none"
          if (!titleElement) {
            main.style.width = "calc(100% - 48px)"
          } else {
            if (getComputedStyle(checkout).display != "none")
              withDrawPanel.style.width = "calc(100% - 48px - 260px)"
            else withDrawPanel.style.width = "100%"
          }
          main.style.left = "0px"
        } else {
          sideBar.style.display = "flex"
        }
      })
      // Checkout hide and show function
      closeCheckout.addEventListener("click", () => {
        checkout.style.display = "none"
        withDrawPanel.style.width = "100%"
      })
    }
  }

  _matchUrlToRoute(urlSegments) {
    // Try and match the URL to a route.
    const matchedRoute = this.routes.find((route) => {
      // We assume that the route path always starts with a slash, and so
      // the first item in the segments array  will always be an empty
      // string. Slice the array at index 1 to ignore this empty string.
      const routePathSegments = route.path.split("/").slice(1)

      // If there are different numbers of segments, then the route
      // does not match the URL.
      if (routePathSegments.length !== urlSegments.length) {
        return false
      }

      // If each segment in the url matches the corresponding route path,
      // then the route is matched.
      return routePathSegments.every(
        (routePathSegment, i) => routePathSegment === urlSegments[i]
      )
    })
    return matchedRoute
  }

  _loadInitialRoute() {
    // Figure out the path segments for the route which should load initially.
    const pathnameSplit = window.location.pathname.split("/")
    const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : ""

    // Load the initial route.
    this.loadRoute(...pathSegments)
  }
}
