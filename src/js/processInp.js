import getWeatherParams from "./getWeatherParams";
import renderWeather from "./renderWeather";
import renderErrorMessage from "./renderErrorMessage";


async function processInp(event) {
    try {
        event.preventDefault();
        const data = await getWeatherParams(event.target[0].value);
        console.log(data.cod);
        if (data.cod === 200) {
        console.log("defrfrebgtrevfdsfv");
        renderWeather(data);
        } else {
        await renderErrorMessage(data);
        }

    } catch (data) {
        renderErrorMessage(data);
    }

}

export default processInp;