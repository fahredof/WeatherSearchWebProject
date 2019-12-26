import renderWeather from "./renderWeather";
import renderErrorMessage from "./renderErrorMessage";

const apiKey = "f77919380546d1f6ef8015d53089ba0e";

export default async function getWeatherParams(city) {
    let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    let dataByCity;
    if (response.ok) {
        dataByCity = await response.json();
        await renderWeather(dataByCity);
    } else {
        dataByCity = await response.json();
        //dataByCity = {error: "The server responded with a status of " + response.status + response.message };
        await renderErrorMessage(dataByCity);
    }
}