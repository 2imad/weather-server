const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode(process.argv[2], (error, { latitude, longtitude, location }) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longtitude, (error, { temperature, probability }) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(
      "temperature is : " + temperature + " c°",
      "chance of rain is " + probability + " %"
    );
  });
});
