const axios = require("axios");
require("dotenv").config();

const forecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/${process.env.api}/${lat},${lng}?units=si`;
  axios
    .get(url)
    .then(result => {
      callback(undefined, {
        temperature: result.data.currently.temperature,
        probability: result.data.currently.precipProbability
      });
    })
    .catch(error => {
      if (error.response) {
        callback(
          "There was a problem with the request,check the URL and parameters",
          undefined
        );
      } else if (error.request) {
        callback(
          "A problem with the request has occured,check the settings or your internet connection",
          undefined
        );
      }
    });
};

module.exports = forecast;
