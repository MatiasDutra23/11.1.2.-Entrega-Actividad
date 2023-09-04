// Espera a que la página HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  //clave de la API
  const apiKey = '2a3d2f97b6ae7ee41823afe5ff7b33d9';

  // Coordenadas de latitud y longitud de tu localidad (Puedes cambiar estas coordenadas para ver otra ubicación)
  const latitude = -33.68272565799198; 
  const longitude = -53.55610306188749;

  // URL de la API del clima con las coordenadas y la clave de API
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  
  fetch(apiUrl)
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => {
      const cityName = data.name; // Nombre de la ciudad
      const temperatureKelvin = data.main.temp; // Temperatura en Kelvin
      const weatherDescription = data.weather[0].description; // Descripción del clima

      // Convierte la temperatura de Kelvin a Celsius
      const temperatureCelsius = temperatureKelvin - 273.15;

      // Selecciona los elementos del HTML donde mostraremos los datos del clima
      const cityElement = document.getElementById('cityName');
      const weatherDescriptionElement = document.getElementById('weatherDescription');
      const temperatureElement = document.getElementById('temperature');
      const weatherIconElement = document.querySelector('.weather-icon');

      // Muestra los datos del clima en la página web
      cityElement.textContent = cityName;
      weatherDescriptionElement.textContent = weatherDescription;
      temperatureElement.textContent = temperatureCelsius.toFixed(2);

     // Remover todas las clases de icono de clima del elemento
weatherIconElement.classList.remove('sun', 'cloud', 'light-rain', 'default-icon');

// Asigna una clase de icono de clima según la descripción del clima
if (weatherDescription.toLowerCase().includes('clear')) {
  weatherIconElement.classList.add('sun'); // Icono de sol
} else if (weatherDescription.toLowerCase().includes('cloud')) {
  weatherIconElement.classList.add('cloud'); // Icono de nube
} else if (weatherDescription.toLowerCase().includes('rain')) {
  weatherIconElement.classList.add('light-rain'); // Icono de lluvia ligera
} else {
  weatherIconElement.classList.add('default-icon'); // Icono predeterminado
}


    });
});
