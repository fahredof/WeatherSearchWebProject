import renderWeather from "./renderWeather";
import renderErrorMessage from "./renderErrorMessage";

const apiKey = "f77919380546d1f6ef8015d53089ba0e";

export default async function getWeatherParams(city) {
    let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(data => data.json());
    if (response.cod === 200) {
        await renderWeather(response);
    } else {
        await renderErrorMessage(response);
    }
    return response;
}