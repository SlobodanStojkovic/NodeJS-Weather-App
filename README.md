# NodeJS Weather App

## This Weatcher Application will show you details about desired location, including latitude and longitude, as well as temperature and humidity for the desired location.

### To run this application:
1. Clone project repository
2. Run npm install from terminal
3. Run node app.js "Desired city name" 

Example - if you want to get result for Belgrade you will run from terminal:
node app.js "Belgrade"

#### Data recieved will be in this format:
Location details: {
  location: 'Beograd, Stari Grad, Serbia',
  latitude: 44.817813,
  longitude: 20.456897
}
Weather details: { temperature: '24° Celsius', humidity: '50%' }