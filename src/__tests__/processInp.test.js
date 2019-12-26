import processInp from "../js/processInp";

describe("Testing processInp function", () => {
    let event = {
        preventDefault: jest.fn(() => {
        }),
        target: [{
            value: "Saint Petersburg"
        }]
    };

    test("call function preventDefault", () => {
        processInp(event);
        expect(event.preventDefault.mock.calls.length).toBe(1);
    });
});