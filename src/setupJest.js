require('jest-fetch-mock').enableMocks();
const body = `<div class="container"><div class="row"><div class="col"></div><div class="col-lg-8 weather" id="backId"><form id="Form"><div class="form-group"><input class="form-control" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Введите город"></div><button class="btn btn-primary" id="submit" type="submit">Подтвердить</button></form><div class="listOfWeather" id="listOfWeather"></div></div><div class="col"></div></div></div>`;

Object.defineProperty(document, 'currentScript', {
    value: document.createElement('script'),
});
document.body.innerHTML = body;

export { body };