//If we don't want to use postman-request library, we can write the following code
const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=e0788e66fccd306547cbcaa18216db6f&query=45,-75";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    console.log(chunk); //returns buffer data in binary
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body); //we get parsed object with weather dataF
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
