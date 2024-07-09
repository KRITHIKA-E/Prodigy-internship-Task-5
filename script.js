// script.js

const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const weatherDisplay = document.getElementById('weatherDisplay');
const cityName = document.getElementById('cityName');
const weather = document.getElementById('weather');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeatherData(location);
    }
});

function getWeatherData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert('Location not found!');
            }
        })
        .catch(error => {
            alert('Error fetching weather data!');
            console.error('Error:', error);
        });
}

function displayWeatherData(data) {
    weatherDisplay.style.display = 'block';
    cityName.textContent = data.name;
    weather.textContent = `Weather: ${data.weather[0].description}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
