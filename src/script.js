let apiKey = `992c88e05d9caeefb130effc34e9ce07`;
let units = `metric`;
let celsiusTemp = 1;

function logWeatherData(response) {
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  applyLink5(`lat=${lat}&lon=${lon}`);
  console.log(response.data);
  //
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let wind = Math.round(response.data.wind.speed);
  let pressure = Math.round(response.data.main.pressure);
  let city = response.data.name;
  let country = response.data.sys.country;
  let weather = response.data.weather[0].main;

  celsiusTemp = response.data.main.temp;

  //Replacement in HTML

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}°C`;
  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = `${humidity}`;
  let currentWind = document.querySelector("#current-wind");
  currentWind.innerHTML = `${wind}`;
  let currentPressure = document.querySelector("#current-pressure");
  currentPressure.innerHTML = `${pressure}`;
  let currentCity = document.querySelector("#location");
  currentCity.innerHTML = `${city}, ${country}`;
  let currentWeather = document.querySelector("#weather");
  currentWeather.innerHTML = `${weather}`;

  /////iconset

  let currentIcon = document.querySelectorAll("#weather-icon");
  for (let i = 0; i < currentIcon.length; i++) {
    currentIcon[i].setAttribute(
      "src",
      `img/${response.data.weather[0].icon}.png`
    );
    currentIcon[i].setAttribute(
      "alt",
      `img/${response.data.weather[0].description}`
    );
  }
}

function logWeatherData5(response5) {
  console.log(response5.data);
  let minTemperature = Math.round(response5.data.daily[0].temp.min);
  let maxTemperature = Math.round(response5.data.daily[0].temp.max);
  let minTemperature1 = Math.round(response5.data.daily[1].temp.min);
  let maxTemperature1 = Math.round(response5.data.daily[1].temp.max);
  let minTemperature2 = Math.round(response5.data.daily[2].temp.min);
  let maxTemperature2 = Math.round(response5.data.daily[2].temp.max);
  let minTemperature3 = Math.round(response5.data.daily[3].temp.min);
  let maxTemperature3 = Math.round(response5.data.daily[3].temp.max);
  let minTemperature4 = Math.round(response5.data.daily[4].temp.min);
  let maxTemperature4 = Math.round(response5.data.daily[4].temp.max);
  let minTemperature5 = Math.round(response5.data.daily[5].temp.min);
  let maxTemperature5 = Math.round(response5.data.daily[5].temp.max);
  let currentMinTemperature = document.querySelector(
    "#current-min-temperature"
  );
  currentMinTemperature.innerHTML = `${minTemperature}°C`;
  let currentMaxTemperature = document.querySelector(
    "#current-max-temperature"
  );
  currentMaxTemperature.innerHTML = `${maxTemperature}°C`;

  let currentMinTemperature1 = document.querySelector(
    "#current-min-temperature1"
  );
  currentMinTemperature1.innerHTML = `${minTemperature1}°C`;
  let currentMaxTemperature1 = document.querySelector(
    "#current-max-temperature1"
  );
  currentMaxTemperature1.innerHTML = `${maxTemperature1}°C`;

  let currentMinTemperature2 = document.querySelector(
    "#current-min-temperature2"
  );
  currentMinTemperature2.innerHTML = `${minTemperature2}°C`;
  let currentMaxTemperature2 = document.querySelector(
    "#current-max-temperature2"
  );
  currentMaxTemperature2.innerHTML = `${maxTemperature2}°C`;

  let currentMinTemperature3 = document.querySelector(
    "#current-min-temperature3"
  );
  currentMinTemperature3.innerHTML = `${minTemperature3}°C`;
  let currentMaxTemperature3 = document.querySelector(
    "#current-max-temperature3"
  );
  currentMaxTemperature3.innerHTML = `${maxTemperature3}°C`;

  let currentMinTemperature4 = document.querySelector(
    "#current-min-temperature4"
  );
  currentMinTemperature4.innerHTML = `${minTemperature4}°C`;
  let currentMaxTemperature4 = document.querySelector(
    "#current-max-temperature4"
  );
  currentMaxTemperature4.innerHTML = `${maxTemperature4}°C`;

  let currentMinTemperature5 = document.querySelector(
    "#current-min-temperature5"
  );
  currentMinTemperature5.innerHTML = `${minTemperature5}°C`;
  let currentMaxTemperature5 = document.querySelector(
    "#current-max-temperature5"
  );
  currentMaxTemperature5.innerHTML = `${maxTemperature5}°C`;
  ///// icons 5 days
  let currentWeatherIcon1 = document.querySelector("#weather-icon1");
  currentWeatherIcon1.setAttribute(
    "src",
    `img/${response5.data.daily[1].weather[0].icon}.png`
  );
  currentWeatherIcon1.setAttribute(
    "alt",
    `img/${response5.data.daily[1].weather[0].description}`
  );

  let currentWeatherIcon2 = document.querySelector("#weather-icon2");
  currentWeatherIcon2.setAttribute(
    "src",
    `img/${response5.data.daily[2].weather[0].icon}.png`
  );
  currentWeatherIcon2.setAttribute(
    "alt",
    `img/${response5.data.daily[2].weather[0].description}`
  );

  let currentWeatherIcon3 = document.querySelector("#weather-icon3");
  currentWeatherIcon3.setAttribute(
    "src",
    `img/${response5.data.daily[3].weather[0].icon}.png`
  );
  currentWeatherIcon3.setAttribute(
    "alt",
    `img/${response5.data.daily[3].weather[0].description}`
  );

  let currentWeatherIcon4 = document.querySelector("#weather-icon4");
  currentWeatherIcon4.setAttribute(
    "src",
    `img/${response5.data.daily[4].weather[0].icon}.png`
  );
  currentWeatherIcon4.setAttribute(
    "alt",
    `img/${response5.data.daily[4].weather[0].description}`
  );

  let currentWeatherIcon5 = document.querySelector("#weather-icon5");
  currentWeatherIcon5.setAttribute(
    "src",
    `img/${response5.data.daily[5].weather[0].icon}.png`
  );
  currentWeatherIcon5.setAttribute(
    "alt",
    `img/${response5.data.daily[5].weather[0].description}`
  );
}

function trackLocation(coordinates) {
  let lat = coordinates.coords.latitude;
  let lon = coordinates.coords.longitude;
  applyLink(`lat=${lat}&lon=${lon}`);
}

function applyLink(locationLink) {
  let weatherLink = `https://api.openweathermap.org/data/2.5/weather?${locationLink}&units=${units}&appid=${apiKey}`;
  axios.get(weatherLink).then(logWeatherData);
}

function applyLink5(locationLink) {
  let weatherLink = `https://api.openweathermap.org/data/2.5/onecall?${locationLink}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`;
  axios.get(weatherLink).then(logWeatherData5);
}

navigator.geolocation.getCurrentPosition(trackLocation);

let now = new Date();

let currentDay = document.querySelectorAll("#current-day");
let currentMonth = document.querySelectorAll("#current-month");
let currentDate = document.querySelectorAll("#current-date");
let currentHours = document.querySelector("#current-hours");
let currentMinutes = document.querySelector("#current-minutes");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let daysAbb = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

Date.prototype.NextDay = function (e) {
  return new Date(
    this.getFullYear(),
    this.getMonth(),
    this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
  );
};

/////

let now1 = new Date().NextDay(1);
let date1 = now1.getDate();
let month1 = months[now1.getMonth()];
let day1 = daysAbb[now1.getDay()];

let currentDate1 = document.querySelector("#current-date1");
currentDate1.innerHTML = `${date1}`;
let currentMonth1 = document.querySelector("#current-month1");
currentMonth1.innerHTML = `${month1}`;
let currentDay1 = document.querySelector("#current-day1");
currentDay1.innerHTML = `${day1}`;

let now2 = new Date().NextDay(2);
let date2 = now2.getDate();
let month2 = months[now2.getMonth()];
let day2 = daysAbb[now2.getDay()];

let currentDate2 = document.querySelector("#current-date2");
currentDate2.innerHTML = `${date2}`;
let currentMonth2 = document.querySelector("#current-month2");
currentMonth2.innerHTML = `${month2}`;
let currentDay2 = document.querySelector("#current-day2");
currentDay2.innerHTML = `${day2}`;

let now3 = new Date().NextDay(3);
let date3 = now3.getDate();
let month3 = months[now3.getMonth()];
let day3 = daysAbb[now3.getDay()];

let currentDate3 = document.querySelector("#current-date3");
currentDate3.innerHTML = `${date3}`;
let currentMonth3 = document.querySelector("#current-month3");
currentMonth3.innerHTML = `${month3}`;
let currentDay3 = document.querySelector("#current-day3");
currentDay3.innerHTML = `${day3}`;

let now4 = new Date().NextDay(4);
let date4 = now4.getDate();
let month4 = months[now4.getMonth()];
let day4 = daysAbb[now4.getDay()];

let currentDate4 = document.querySelector("#current-date4");
currentDate4.innerHTML = `${date4}`;
let currentMonth4 = document.querySelector("#current-month4");
currentMonth4.innerHTML = `${month4}`;
let currentDay4 = document.querySelector("#current-day4");
currentDay4.innerHTML = `${day4}`;

let now5 = new Date().NextDay(5);
let date5 = now5.getDate();
let month5 = months[now5.getMonth()];
let day5 = daysAbb[now5.getDay()];

let currentDate5 = document.querySelector("#current-date5");
currentDate5.innerHTML = `${date5}`;
let currentMonth5 = document.querySelector("#current-month5");
currentMonth5.innerHTML = `${month5}`;
let currentDay5 = document.querySelector("#current-day5");
currentDay5.innerHTML = `${day5}`;

/////

let month = months[now.getMonth()];
console.log(month);

let date = now.getDate();
console.log(date);

let hours = now.getHours();
console.log(hours);
if (hours < 10) {
  hours = "0" + hours;
}

let minutes = now.getMinutes();
console.log(minutes);
if (minutes < 10) {
  minutes = "0" + minutes;
}

for (let i = 0; i < currentDay.length; i++) {
  currentDay[i].innerHTML = `${day}`;
}
for (let i = 0; i < currentMonth.length; i++) {
  currentMonth[i].innerHTML = `${month}`;
}
for (let i = 0; i < currentDate.length; i++) {
  currentDate[i].innerHTML = `${date}`;
}
currentHours.innerHTML = `${hours}`;
currentMinutes.innerHTML = `${minutes}`;

/////

function changeLocation(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let cityName = `${searchParse.value}`;
    applyLink(`q=${searchParse.value}`);
  }
}

let searchParse = document.querySelector("#search-Parse");
searchParse.addEventListener("keypress", changeLocation);

function convertToFahrenheit(event) {
  event.preventDefault();
  let farenheitResult = (celsiusTemp * 9) / 5 + 32;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${Math.round(farenheitResult)}°F`;
  convertToC.classList.remove("active");
  convertToF.classList.add("active");
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = `${Math.round(celsiusTemp)}°C`;
  convertToC.classList.add("active");
  convertToF.classList.remove("active");
}

let convertToF = document.querySelector("#to-farenheit");
convertToF.addEventListener("click", convertToFahrenheit);

let convertToC = document.querySelector("#to-celsius");
convertToC.addEventListener("click", convertToCelsius);
