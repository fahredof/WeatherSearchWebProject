import getWeatherParams from "../js/getWeatherParams";

describe("Fetch weather", () => {
    const cityNameCorrect = "Ufa";
    const data = '{"coord":{"lon":30.32,"lat":59.94},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":276.37,"feels_like":273.51,"temp_min":276.15,"temp_max":276.48,"pressure":1004,"humidity":100},"visibility":450,"wind":{"speed":2,"deg":280},"clouds":{"all":90},"dt":1577144690,"sys":{"type":1,"id":8926,"country":"RU","sunrise":1577170875,"sunset":1577192085},"timezone":10800,"id":498817,"name":"Saint Petersburg","cod":200}';

    beforeEach(() => {
        fetch.resetMocks()
    });

    test('Fetch called', async ()=>{
        fetch.mockResponse(data);
        await getWeatherParams(cityNameCorrect);
        expect(fetch).toBeCalled();
    });

    test('Fetch called with right link', async ()=>{
        fetch.mockResponse(data);
        await getWeatherParams(cityNameCorrect);
        expect(fetch).toBeCalledWith('http://api.openweathermap.org/data/2.5/weather?q=Ufa&appid=f77919380546d1f6ef8015d53089ba0e');
    });

    test('Fetch called with bad name city', async ()=>{
        const cityNameWrong = "ersgtdfhgjh";
        const dataError = {cod: "404", message: "city not found"};
        const expectedErrorData = {"cod": "404", "message": "city not found"};

        fetch.mockResponse(JSON.stringify(dataError));
        const res = await getWeatherParams(cityNameWrong);
        expect(res).toStrictEqual(expectedErrorData);
    })

});