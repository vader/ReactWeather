var axios = require('axios');
const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=e372779e92b5144dc941c19ca9af305a&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res.data.main.temp);
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error('Unable to fetch weather for that location');
    });
  },
};
