const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=e0788e66fccd306547cbcaa18216db6f&query=Belgrade";

request(
  { url: url /* json: true to recieve already parsed data*/ },
  (error, response) => {
    const data = JSON.parse(response.body);
    if (error) {
      console.log("Unable to connect to weather service!");
    } else if (data.error) {
      console.log("Unable to find location!");
    } else {
      console.log(
        "It is currently " +
          data.current.temperature +
          " degrees out. The humidity is " +
          data.current.humidity +
          "%"
      );
    }
  }
);

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVzdGljZWdhbWVwbGF5cyIsImEiOiJjbDMxcHd5bWowY2ozM2pwOWFiZmJ6czJ2In0.2xSRufCsM4jM9TDR5EvB1Q&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.error) {
    console.log("Unable to find location! Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
