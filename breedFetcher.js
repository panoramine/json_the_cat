const request = require("request");

let arg = process.argv.slice(2);


const breedFetcher = function(breed) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (error) {
      return console.log("ERROR: ", error);
    }
    const data = JSON.parse(body);
    if (data.length !== 0) {
      console.log(data[0].description);
    } else {
      return console.log("Breed not found!");
    }
  });
};

breedFetcher(arg[0]);

