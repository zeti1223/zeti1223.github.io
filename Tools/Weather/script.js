// Use your own OpenWeatherMap API Key below
const apiKey = '1932ba53c628a41013a6d5e0a645b415'

const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById('error');

const units = 'metric'; //can be imperial or metric
let temperatureSymobol = units == 'imperial' ? "°F" : "°C";

// Add event listener to trigger fetchWeather on Enter key press
document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fetchWeather();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'Enter') {
        window.location.href = 'index2.html';
    }
});

let typingTimer;
const typingInterval = 2000; // 2 seconds

document.getElementById('cityInput').addEventListener('input', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(fetchWeather, typingInterval);
});

// Add event listener to city element to show city input field again
city.addEventListener('click', function () {
    document.getElementById('cityInput').style.display = 'block';
});

async function fetchWeather() {
    try {
        weatherContainer.innerHTML = '';
        error.innerHTML = '';
        city.innerHTML = '';

        const cnt = 10;
        const cityInputtedByUser = document.getElementById('cityInput').value;

        // Hide the input field after the user enters a city
        document.getElementById('cityInput').style.display = 'none';

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputtedByUser}&appid=${apiKey}&units=${units}&cnt=${cnt}`;

        const response = await fetch(apiUrl);
        const data = await response.json();


        if (data.cod == '400' || data.cod == '404') {
            error.innerHTML = `Nem valós város. Kérjük, adjon meg egy másik várost!`;
            return;
        }
        //Display weather data for each 3 hour increment
        data.list.forEach(hourlyWeatherData => {
            const hourlyWeatherDataDiv = createWeatherDescription(hourlyWeatherData);
            weatherContainer.appendChild(hourlyWeatherDataDiv);
        });

        // Display city name based on latitude and longitude
        city.innerHTML = `${data.city.name}`;

    } catch (error) {
        console.log(error);
    }
}

function convertToLocalTime(dt) {
    // Create a new Date object by multiplying the Unix timestamp by 1000 to convert it to milliseconds
    // Will produce a time in the local timezone of user's computer
    const date = new Date(dt * 1000);

    const hours = date.getHours(); // Use 24-hour format without leading zero

    // Formatted date string in the format: h óra
    return `${hours} óra`;
}

function createWeatherDescription(weatherData) {
    const { main, dt } = weatherData;

    const description = document.createElement("div");
    const convertedDateAndTime = convertToLocalTime(dt);

    // Round the temperature
    const roundedTemp = Math.round(main.temp);

    let isRounded = true;

    description.innerHTML = `
        <div class="weather_description">${roundedTemp}${temperatureSymobol} - ${convertedDateAndTime}</div>
    `;

    // Add event listener to toggle temperature display on click
    description.addEventListener('click', () => {
        if (isRounded) {
            description.innerHTML = `
                <div class="weather_description">${main.temp}${temperatureSymobol} - ${convertedDateAndTime}</div>
            `;
        } else {
            description.innerHTML = `
                <div class="weather_description">${roundedTemp}${temperatureSymobol} - ${convertedDateAndTime}</div>
            `;
        }
        isRounded = !isRounded;
    });

    return description;
}