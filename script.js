 const apiKey = "2b87ba7a024581ba46fe2eb5b443d739";

// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    const city = cityInput.value.trim();
    if (city !== "") {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            cityName.textContent = data.name;
            temperature.textContent = `${data.main.temp} °C`;
            description.textContent = data.weather[0].description;
        } catch (error) {
            cityName.textContent = "Error";
            temperature.textContent = "";
            description.textContent = "";
            console.error("Error fetching weather data:", error);
        }
    }
}
