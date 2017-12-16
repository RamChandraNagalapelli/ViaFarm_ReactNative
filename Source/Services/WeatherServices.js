export const WeatherServices = {
    getWeather
};


function getWeather(city) {
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=1fa136797a15633a60b2ec78f34a1179'
    return (
        new Promise(function (resolve, reject) {
            return fetch(url, {
                method: 'GET'
            }).then(function (response) {
                var data = response.json();
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    )
}