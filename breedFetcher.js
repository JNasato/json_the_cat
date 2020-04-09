const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (body === "[]") {
      callback("That breed was not found.");
    } else {
      const data = JSON.parse(body);
      callback(err, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
