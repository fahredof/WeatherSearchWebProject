import './style.scss';
const tempFunction = require('./template.pug');
const err = "Введите город";
let apiKey = "f77919380546d1f6ef8015d53089ba0e";

function processInp(event) {
  getWeatherParams(event.target[0].value);
  event.preventDefault();
}

document.getElementById("Form").addEventListener("submit", processInp);

function getWeatherParams(cityName) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
        params: {
            q: cityName,
            appid: apiKey
        }
    })
        .then(function(resultParam) {
            let weather = resultParam.data;
            fillWeather(weather);
        })
        .catch(function(err) {
            //console.log(err.message);
            fillErr(err.message);
        })
}

function fillErr(message) {
  document.getElementById("listOfWeather").innerHTML = tempFunction({
    pic: "",
    place: "",
    clouds: "",
    temp: message,
    wind: ""
  });
}

function fillWeather(weather) {
  document.getElementById("listOfWeather").innerHTML = tempFunction({
    pic: "http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png",
    place: weather.name+", "+weather.sys.country,
    clouds: "Current weather: "+weather.weather[0].main+" ( "+weather.weather[0].description+" )",
    temp: "Temperature: "+(weather.main.temp - 273.15).toFixed(0)+"°C",
    wind: "Wind: "+weather.wind.speed+"m/s"
  });
}
