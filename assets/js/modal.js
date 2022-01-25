let openModal = document.getElementById("view_modal")
let closeModal = document.getElementById("close_modal")
const modal = document.getElementsByClassName("modal-container")[0]

// Modal hide and show function
openModal.addEventListener("click", () => {
  // Clear chart
  while (document.getElementById("chart_panel").hasChildNodes()) {
    document
      .getElementById("chart_panel")
      .removeChild(document.getElementById("chart_panel").firstChild)
  }

  // Chart data get function
  // create a data set on our data
  var dataSet = anychart.data.set(getData())

  // map data for the first series,
  // take x from the zero column and value from the first column
  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 })

  // map data for the second series,
  // take x from the zero column and value from the second column
  var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 })

  // create a line chart
  var chart = anychart.line()
  chart.background().fill("transparent")

  var xlabels = chart.xAxis().labels()
  xlabels.enabled(false)

  chart.xScale().mode("continuous")

  // create the first series with the mapped data
  var firstSeries = chart.line(firstSeriesData)
  firstSeries.name("A")

  // create the second series with the mapped data
  var secondSeries = chart.line(secondSeriesData)
  secondSeries.name("B")

  // turn the legend on
  chart.legend().enabled(false)

  // set the container id for the line chart
  chart.container("chart_panel")

  // draw the line chart
  chart.draw()
  modal.classList.toggle("toggle-modal")
})

closeModal.addEventListener("click", () => {
  modal.classList.toggle("toggle-modal")
})
