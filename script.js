document.addEventListener("DOMContentLoaded", function () {
  // Clave de la API
  const apiKey = '2a3d2f97b6ae7ee41823afe5ff7b33d9';

  // Obtener elementos del DOM
  const locationSelect = document.getElementById('locationSelect');
  const cityElement = document.getElementById('cityName');
  const weatherDescriptionElement = document.getElementById('weatherDescription');
  const temperatureElement = document.getElementById('temperature');
  const weatherIconElement = document.querySelector('.weather-icon');

  // Escuchar cambios en el menú desplegable
  locationSelect.addEventListener('change', function () {
    // Obtener la latitud y longitud de la opción seleccionada
    const selectedLocation = locationSelect.value.split(',');
    const latitude = selectedLocation[0];
    const longitude = selectedLocation[1];

    // URL de la API del clima con las nuevas coordenadas
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const cityName = data.name;
        const temperatureKelvin = data.main.temp;
        const weatherDescription = data.weather[0].description;

        // Convierte la temperatura de Kelvin a Celsius
        const temperatureCelsius = temperatureKelvin - 273.15;

        // Actualizar los elementos del HTML con los nuevos datos del clima
        cityElement.textContent = cityName;
        weatherDescriptionElement.textContent = weatherDescription;
        temperatureElement.textContent = temperatureCelsius.toFixed(2);

        // Remover todas las clases de icono de clima del elemento
        weatherIconElement.classList.remove('sun', 'cloud', 'light-rain', 'default-icon', 'overcast-clouds');

       // Asignar una clase de icono de clima según la descripción del clima
const lowercaseDescription = weatherDescription.toLowerCase();
if (lowercaseDescription === 'clear') {
  weatherIconElement.classList.add('sun'); // Icono de sol
} else if (lowercaseDescription === 'cloud') {
  weatherIconElement.classList.add('cloud'); // Icono de nube
} else if (lowercaseDescription === 'rain') {
  weatherIconElement.classList.add('light-rain'); // Icono de lluvia ligera
} else if (lowercaseDescription === 'overcast clouds') {
  weatherIconElement.classList.add('overcast-clouds'); // Icono para "overcast clouds"
} else {
  weatherIconElement.classList.add('default-icon'); // Icono predeterminado
}

      });
  });

  // Disparar el evento 'change' para cargar la primera ubicación por defecto
  locationSelect.dispatchEvent(new Event('change'));
});
