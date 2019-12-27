const tempFunction = require('../template.pug');

export default async function renderWeather(data) {
    //let data = await elements;
    document.getElementById("listOfWeather").innerHTML = tempFunction({
        image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        city: data.name,
        temp: `${(data.main.temp - 273.15).toFixed(0)}°C`,
        wind: `Wind ${data.wind.speed} m/s`,
        overcast: data.weather[0].description,
        pressure: `Pressure ${data.main.pressure} hpa`,
        humidity: `Humidity ${data.main.humidity} %`,
        error: ""
    });
    return {
        image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        city: data.name,
        temp: `${(data.main.temp - 273.15).toFixed(0)}°C`,
        wind: `Wind ${data.wind.speed} m/s`,
        overcast: data.weather[0].description,
        pressure: `Pressure ${data.main.pressure} hpa`,
        humidity: `Humidity ${data.main.humidity} %`,
        error: ""
    }
}