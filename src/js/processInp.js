import getWeatherParams from "./getWeatherParams";

function processInp(event) {
    event.preventDefault();
    getWeatherParams(event.target[0].value);
}

export default processInp;