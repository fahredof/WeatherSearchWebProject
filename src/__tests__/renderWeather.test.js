import {body} from "../setupJest";
import renderWeather from "../js/renderWeather";

describe("Render Weather", () => {
    const message =
    {"coord":{"lon":55.95,"lat":54.73},
        "weather":[{"id":804,
                    "main":"Clouds",
                    "description":"overcast clouds",
                    "icon":"04n"
                   }],
        "base":"stations",
        "main":{
        "temp":257.07,
            "feels_like":252.73,
            "temp_min":257.04,
            "temp_max":257.15,
            "pressure":1017,
            "humidity":84},
        "visibility":10000,
        "wind":{
            "speed":1,
            "deg":17},
        "clouds":{"all":100},
        "dt":1577326733,
        "sys":{"type":1,
            "id":9050,
            "country":"RU",
            "sunrise":1577335159,
            "sunset":1577361209},
        "timezone":18000,"id":479561,
        "name":"Ufa",
        "cod":200
    };

    beforeEach(() => {
       document.body.innerHTML = body;
    });

    test("Render elements correct", () => {
        const expected =
            '<img id="item0" src="https://openweathermap.org/img/wn/04n@2x.png">' +
            '<div id="item1">Ufa</div>' +
            '<div id="item2">-16°C</div>' +
            '<div id="item3">Wind 1 m/s</div>' +
            '<div id="item4">overcast clouds</div>' +
            '<div id="item5">Pressure 1017 hpa</div>' +
            '<div id="item6">Humidity 84 %</div>' +
            '<div id="item7"></div>';
        renderWeather(message);
        expect(document.getElementById("listOfWeather").innerHTML).toEqual(expected)
    })
});


