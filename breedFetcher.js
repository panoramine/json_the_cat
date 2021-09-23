const request = require("request");


const fetchBreedDescription = function(breed, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback("Breed not found!", null);
    }

    callback(null, data[0].description);

  });
};



module.exports = { fetchBreedDescription };
