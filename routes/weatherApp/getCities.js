var express = require('express');
var router = express.Router();
const weatherData = require("./sample-weather-data").weatherData;
const _ = require("lodash");

router.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let cities = [];

    if (weatherData && weatherData.length > 0) {
        const uniqueWeather = _.uniqBy(weatherData, function(weather) {
            return weather.station_id;
        });

        if (uniqueWeather && uniqueWeather.length > 0) {
            _.each(uniqueWeather, function(weather) {
                cities.push({
                    station_id: weather.station_id,
                    place_name: weather.place_name,
                    latitude: weather.latitude,
                    longitude: weather.longitude,
                });
            })
        }
    }

    res.send(JSON.stringify(cities));
});

module.exports = router;
