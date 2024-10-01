const apiKey = 'c15cf3da5bde727df9edfca84ae0f8bb';
function getWeather() {
    const location = document.getElementById('location').value;
    if (location === '') {
        alert('Please enter a city name.');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weather-data').innerHTML = '<p>City not found. Please try again.</p>';
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;
                const weatherInfo = `
                    <p><strong>Temperature:</strong> ${temperature}°C</p>
                    <p><strong>Condition:</strong> ${description}</p>
                    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
                `;
                document.getElementById('weather-data').innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            document.getElementById('weather-data').innerHTML = '<p>Error fetching weather data.</p>';
        });
}
