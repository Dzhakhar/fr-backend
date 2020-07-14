var express = require('express');
var router = express.Router();
const weatherData = require("./sample-weather-data").weatherData;
const _ = require("lodash");

router.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const stationId = req.query.stationId;

    if (!stationId) {
        res.send("Please specify the stationId Like that ?stationId=123123");
        return;
    }

    const foundWeather = _.filter(weatherData, function(weather) {
        return weather.station_id === parseInt(stationId);
    });

    res.send(foundWeather);
});

module.exports = router;
