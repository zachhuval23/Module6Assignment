// JSON Payload for Weather Data
var weatherData = {
  "cities": [
    {
      "name": "Poulsbo, WA",
      "temperature": 75,
      "chance_of_rain": 5
    },
    {
      "name": "Silverdale, WA",
      "temperature": 78,
      "chance_of_rain": 4
    },
    {
      "name": "Bremerton, WA",
      "temperature": 77,
      "chance_of_rain": 4
    },
    {
      "name": "Port Orchard, WA",
      "temperature": 77,
      "chance_of_rain": 4
    },
    {
      "name": "Busan, South Korea",
      "temperature": 60,
      "chance_of_rain": 14
    },
    {
      "name": "Charlotte, NC",
      "temperature": 71,
      "chance_of_rain": 6
    }
  ]
};

// Function to display the weather data in the table
function displayWeatherData() {
  var tableBody = document.getElementById("weatherTableBody");

  // Clears Existing Table Rows
  tableBody.innerHTML = "";

  // Loop through each city in the weather data and create a table row
  weatherData.cities.forEach(function(city) {
    var row = document.createElement("tr");

    var cityNameCell = document.createElement("td");
    cityNameCell.textContent = city.name;
    row.appendChild(cityNameCell);

    var temperatureCell = document.createElement("td");
    temperatureCell.textContent = city.temperature;
    row.appendChild(temperatureCell);

    var chanceOfRainCell = document.createElement("td");
    chanceOfRainCell.textContent = city.chance_of_rain;
    row.appendChild(chanceOfRainCell);

    tableBody.appendChild(row);
});
}

// Call the function to display the weather data on page load
displayWeatherData();