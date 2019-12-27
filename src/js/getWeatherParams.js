const apiKey = "f77919380546d1f6ef8015d53089ba0e";

export default async function getWeatherParams(city) {
    let response = await fetch (
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(data => data.json())
            .catch(err => console.log(err));
    return response;
}