const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log("Error", error);
    }
    console.log("Location details:", data);

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log("Weather details:", forecastData);
    });
  });
}
