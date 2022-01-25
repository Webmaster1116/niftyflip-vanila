class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  loadRoute(...urlSegments) {
    console.log(urlSegments);
    // Attempt to match the URL to a route.
    const matchedRoute = this._matchUrlToRoute(urlSegments);
    console.log(matchedRoute);
    // Push a history entry with the new URL.
    // We pass an empty object and an empty string as the historyState
    // and title arguments, but their values do not really matter here.
    const url = `/${urlSegments.join("/")}`;
    console.log(url);
    history.pushState({}, "", url);
    // Append the template of the matched route to the DOM,
    // inside the element with attribute data-router-outlet.
    const routerOutletElement = document.querySelectorAll(
      "[data-router-outlet]"
    )[0];
    routerOutletElement.innerHTML = matchedRoute.template;

    // Sidebar hide and show function
    let openSideBar = document.getElementById("btn_sidebar");
    let checkout = document.querySelector(".checkout");

    if (url == "/") {
      // Modal hide and show function
      let openModal = document.getElementById("view_modal");
      let closeModal = document.getElementById("close_modal");
      const modal = document.getElementsByClassName("modal-container")[0];

      openSideBar.addEventListener("click", () => {
        let titleElement = document.getElementsByClassName("title");
        if (getComputedStyle(sideBar).display == "flex") {
          sideBar.style.display = "none";
          main.style.width = "calc(100% - 48px)";
          main.style.left = "0px";
        } else {
          sideBar.style.display = "flex";
        }
      });

      openModal.addEventListener("click", () => {
        // Clear chart
        while (document.getElementById("chart_panel").hasChildNodes()) {
          document
            .getElementById("chart_panel")
            .removeChild(document.getElementById("chart_panel").firstChild);
        }

        // Chart data get function
        // create a data set on our data
        var dataSet = anychart.data.set(getData());

        // map data for the first series,
        // take x from the zero column and value from the first column
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

        // map data for the second series,
        // take x from the zero column and value from the second column
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

        // create a line chart
        var chart = anychart.line();
        chart.background().fill("transparent");

        var xlabels = chart.xAxis().labels();
        xlabels.enabled(false);

        chart.xScale().mode("continuous");

        // create the first series with the mapped data
        var firstSeries = chart.line(firstSeriesData);
        firstSeries.name("A");

        // create the second series with the mapped data
        var secondSeries = chart.line(secondSeriesData);
        secondSeries.name("B");

        // turn the legend on
        chart.legend().enabled(false);

        // set the container id for the line chart
        chart.container("chart_panel");

        // draw the line chart
        chart.draw();
        modal.classList.toggle("toggle-modal");
      });

      closeModal.addEventListener("click", () => {
        modal.classList.toggle("toggle-modal");
      });
    } else {
      // Button element variables
      let closeCheckout = document.getElementById("close_checkout");
      let withDrawPanel = document.querySelector(".withdraw-panel");

      openSideBar.addEventListener("click", () => {
        let titleElement = document.getElementsByClassName("title");
        if (getComputedStyle(sideBar).display == "flex") {
          sideBar.style.display = "none";
          if (!titleElement) {
            main.style.width = "calc(100% - 48px)";
          } else {
            if (getComputedStyle(checkout).display != "none")
              withDrawPanel.style.width = "calc(100% - 48px - 260px)";
            else withDrawPanel.style.width = "100%";
          }
          main.style.left = "0px";
        } else {
          sideBar.style.display = "flex";
        }
      });
      // Checkout hide and show function
      closeCheckout.addEventListener("click", () => {
        checkout.style.display = "none";
        withDrawPanel.style.width = "100%";
      });
    }
  }

  _matchUrlToRoute(urlSegments) {
    // Try and match the URL to a route.
    const matchedRoute = this.routes.find((route) => {
      // We assume that the route path always starts with a slash, and so
      // the first item in the segments array  will always be an empty
      // string. Slice the array at index 1 to ignore this empty string.
      const routePathSegments = route.path.split("/").slice(1);

      // If there are different numbers of segments, then the route
      // does not match the URL.
      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }

      // If each segment in the url matches the corresponding route path,
      // then the route is matched.
      return routePathSegments.every(
        (routePathSegment, i) => routePathSegment === urlSegments[i]
      );
    });
    return matchedRoute;
  }

  _loadInitialRoute() {
    // Figure out the path segments for the route which should load initially.
    const pathnameSplit = window.location.pathname.split("/");
    const pathSegments = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : "";

    // Load the initial route.
    this.loadRoute(...pathSegments);
  }
}
