var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredCities = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredCities.length; i++) {

    var city = filteredCities[i];
    var fields = Object.keys(city);

    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = city[field];
    }
  }
}

function handleSearchButtonClick() {
  var filteredDate = $dateInput.value.trim();

  filteredCities = dataSet.filter(function(city) {
    var cityDate = city.datetime;

    return cityDate === filteredDate;
  });
  renderTable();
}

renderTable();
