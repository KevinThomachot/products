document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city");
  getWeather(cityInput.value);

  cityInput.addEventListener("change", () => {
    getWeather(cityInput.value);
  });
});

function getWeather(city) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd60c201738d4cfbf6456a97f06d46d9&lang=fr&units=metric`
  );
  request.addEventListener("load", () => {
    const response = JSON.parse(request.response);
    console.log(response);
    displayWeather(response);
  });
  request.send();
}

function displayWeather(data) {
  let weatherCity = document.createElement("span");
  let weatherDegres = document.createElement("span");
  let weatherImg = document.createElement("img");
  let weatherCondition = document.createElement("span");
  let weatherWind = document.createElement("span")
 /*let weatherDate = date.toLocaleDateString();*/

  weatherCity.textContent = data.name;
  weatherDegres.textContent = data.main.temp;
  weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherImg.alt = "prévision";
  weatherCondition.textContent = data.weather[0].description;
  weatherWind.textContent = data.wind.speed;
  /*weatherDate.textContent = data.date*/
  

  container.appendChild(weatherCity);
  container.appendChild(weatherDegres);
  container.appendChild(weatherCondition);
  container.appendChild(weatherWind);
  /*container.appendChild(date);*/
  container.appendChild(weatherImg);
}
