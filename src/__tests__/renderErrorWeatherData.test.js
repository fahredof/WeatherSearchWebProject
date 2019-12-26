import renderErrorMessage from "../js/renderErrorMessage";
import {body} from "../setupJest";
import renderWeather from "../js/renderWeather";

describe("Error Message", () => {
    const message = {"cod": "404", "message": "city not found"};

    beforeEach(() => {
        document.body.innerHTML = body;
    });

    test("Render error message correct", () => {
        const expected =
            '<img id="item0" src="">' +
            '<div id="item1"></div>' +
            '<div id="item2"></div>' +
            '<div id="item3"></div>' +
            '<div id="item4"></div>' +
            '<div id="item5"></div>' +
            '<div id="item6"></div>' +
            '<div id="item7">The server responded with a status of 404. city not found</div>';
        renderErrorMessage(message);
        expect(document.getElementById("listOfWeather").innerHTML).toEqual(expected)
    })
});