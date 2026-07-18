document.addEventListener("DOMContentLoaded", () => {
  const inputCity = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-data-btn");
  
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");

  const errorMessage = document.getElementById("error");
  const errorMessageData = document.getElementById("error-data");

  const API_KEY = "";
  
  getWeatherBtn.addEventListener("click", async () => {
    const city = inputCity.value.trim();

    if (!city) {
      return;
    }

    try {
      const weatherData = await fetchWeatherData(city);
      displayData(weatherData);
    } catch (error) {
      showError(error.message);
    }

    inputCity.value = "";
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();
    return data;
  }

  function displayData(data) {
    const { name, main, weather } = data;

    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `🌡 Temperature: ${main.temp} °C`;
    descriptionDisplay.textContent = `🌥 Weather: ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError(message) {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
    errorMessageData.textContent = message;
  }
});