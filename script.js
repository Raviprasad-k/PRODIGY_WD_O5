document
  .getElementById("locationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const locationInput = document.getElementById("locationInput").value.trim();
    if (locationInput) {
      fetchWeather(locationInput);
    } else {
      alert("Please enter a city name");
    }
  });

function fetchWeather(location) {
  const apiKey = "f1244aff0d01f71fa9544bcee4752250";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      alert("Failed to fetch weather. Please try again.");
    });
}

function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");
  weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
