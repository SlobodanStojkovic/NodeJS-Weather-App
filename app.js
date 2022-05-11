const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Belgrade", (error, data) => {
  if (error) {
    return console.log("Error", error);
  }
  console.log("Location details:", data);

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(data.location);
    console.log(forecastData);
  });
});
