const tempFunction = require('../template.pug');

function renderErrorMessage(error) {
    document.getElementById("listOfWeather").innerHTML = tempFunction({
        image: "",
        city: "",
        temp: "",
        wind: "",
        overcast: "",
        pressure: "",
        humidity: "",
        error: `The server responded with a status of ${error.cod}. ${error.message}`
    });
}

export default renderErrorMessage;