import './style.scss';

let apiKey = "f77919380546d1f6ef8015d53089ba0e";

function processInp() {
    let cityName = document.getElementById("exampleInputCity").value;
    getWeatherParams(cityName);
}

document.getElementById("submit").onclick = processInp;

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
            console.log(err.message);
            fillErr(err.message);
        })
}

function fillErr(message) {
    document.getElementById("item0").src="";
    document.getElementById("item1").innerText = "";
    document.getElementById("item2").innerText = "";
    document.getElementById("item3").innerText = message;
    document.getElementById("item4").innerText = "";
}
function fillWeather(weather) {
    document.getElementById("item0").src="http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png";
    document.getElementById("item1").innerText = weather.name+", "+weather.sys.country;
    document.getElementById("item2").innerText = "Current weather: "+weather.weather[0].main+" ( "+weather.weather[0].description+" )";
    document.getElementById("item3").innerText = "Temperature: "+(weather.main.temp - 273.15).toFixed(0)+"°C";
    document.getElementById("item4").innerText = "Wind: "+weather.wind.speed+"m/s";
}