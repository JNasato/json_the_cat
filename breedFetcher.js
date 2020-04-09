const request = require('request');
const cat = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${cat}`, (err, response, body) => {
  if (err) {
    console.log("REQUEST ERROR: ",err);
    throw err;
  }
  console.log("Status code: ", response.statusCode);
  if (body === "[]") {
    console.log("That breed was not found.");
    return false;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});
