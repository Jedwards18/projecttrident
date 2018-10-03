const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '<apiKey>';

//client search, returns 5 results from name matching city.
const client = yelp.client(apiKey);
client.search({
    term:'University of Richmond',
    location: 'Richmond, va'
}).then(response => {
    for(var i=0; i < 5; i++) {
        console.log(response.jsonBody.businesses[i].name + ": " + response.jsonBody.businesses[i].id);
    }
}).catch(e => {
        console.log(e);
});
const id = 'Z6_5TuRryr-jIIwfrmtAkw'

//review search. max 3 results, only an excerpt.
client.reviews(id).then(response => {
  for(var i=0; i <3; i++) {
    console.log(response.jsonBody.reviews[i].text);
  }
}).catch(e => {
  console.log(e);
});