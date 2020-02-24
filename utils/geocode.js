const axios = require("axios");
require("dotenv").config();

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.mapAPI}&limit=1"`;
  axios
    .get(url)
    .then(result => {
      callback(undefined, {
        latitude: result.data.features[0].center[1],
        longtitude: result.data.features[0].center[0],
        location: result.data.features[0].place_name
      });
    })
    .catch(error => {
      if (error.response) {
        callback("unable to find resources please verify your request");
      } else if (error.request) {
        callback(
          "A problem with the request has occured,check the settings or your internet connection"
        );
      }
    });
};

module.exports = geocode;
