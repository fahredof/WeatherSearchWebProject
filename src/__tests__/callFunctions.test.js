jest.mock("../js/getWeatherParams");
jest.mock("../js/renderWeather");
jest.mock("../js/renderErrorMessage");

import {body} from "../setupJest";
import processInp from "../js/processInp";
import getWeatherParams from "../js/getWeatherParams";
import renderWeather from "../js/renderWeather";
import renderErrorMessage from "../js/renderErrorMessage";

const dataSuccess = JSON.parse('{"coord":{"lon":30.32,"lat":59.94},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":276.37,"feels_like":273.51,"temp_min":276.15,"temp_max":276.48,"pressure":1004,"humidity":100},"visibility":450,"wind":{"speed":2,"deg":280},"clouds":{"all":90},"dt":1577144690,"sys":{"type":1,"id":8926,"country":"RU","sunrise":1577170875,"sunset":1577192085},"timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200}');
const dataError = JSON.parse('{"cod":"404","message":"city not found"}');
let event;

describe("Testing processInp function", () => {
    beforeEach(() => {
        document.body.innerHTML = body;
        getWeatherParams.mockReset();
        getWeatherParams.mockImplementation(jest.fn(async(cityName) => {
            if (cityName === dataSuccess.name) {
                return dataSuccess;
                console.log("getWeatherParams");
            }
            else
                return dataError;
        }));
        renderWeather.mockReset();
        renderWeather.mockImplementation(jest.fn(() => {}));
        renderErrorMessage.mockReset();
        renderErrorMessage.mockImplementation(jest.fn(() => {}));

        event = {
            preventDefault: jest.fn(() => {
            }),
            target: [{
                value: "Saint Petersburg"
            }]
        };
    });

    test("call function preventDefault", async () => {
        processInp(event);
        expect(event.preventDefault.mock.calls.length).toBe(1);
    });

    test('call function getWeatherParams', async () => {
        await processInp(event);
        expect(getWeatherParams).toHaveBeenCalledTimes(1);
    });

    test('call function renderWeather', async () => {
        await processInp({...event, target: [{value: 'Saint Petersburg'}]});
        expect(renderWeather.mock.calls.length).toBe(1);
    });

    test('call function renderErrorMessage', async () => {
        await processInp({...event, target: [{value: 'wferegtgrsf'}]});
        expect(renderErrorMessage.mock.calls.length).toBe(1);
    });
});