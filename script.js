document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '2a3d2f97b6ae7ee41823afe5ff7b33d9';
    const lat = -33.68272565799198; // LATITUD de mi localidad extraída de Google Maps
    const lon = -53.55610306188749; // LONGITUD de mi localidad extraída de Google Maps
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const cityName = data.name;
        const temperatureKelvin = data.main.temp;
        const weatherDescription = data.weather[0].description;
  
        // Conversión de Kelvin a Celsius
        const temperatureCelsius = temperatureKelvin - 273.15;
  
        // Selecciona el elemento weather-card
        const weatherCard = document.getElementById('weather-card');
  
        // Muestra los datos del clima
        weatherCard.innerHTML = `
            <h2>Clima en ${cityName}</h2>
            <p>Descripción: ${weatherDescription}</p>
            <p>Temperatura: ${temperatureCelsius.toFixed(2)}°C</p>
        `;
      });
  });
  