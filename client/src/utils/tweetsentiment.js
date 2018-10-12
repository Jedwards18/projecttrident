const AYLIENTextAPI = require('aylien_textapi');
const Twitter = require('twitter');
const yelp = require('yelp-fusion');
require('dotenv').config()

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const yelpKey = process.env.YELP_KEY 
const yelpClient = yelp.client(yelpKey);

const textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_APPLICATION_KEY
});


const getTweets = async (query) => {

  let tweets = await twitterClient.get('search/tweets', {q: query, count: 10});
  let tweetText = tweets.statuses.map(tweet => tweet.text)
  return tweetText;
};


const searchBiz = async (term, location) => {

  let client = await yelpClient.search({ term: term, location: location })
    console.log(`${client.jsonBody.businesses[0].name}: ${client.jsonBody.businesses[0].id}`);
    return client.jsonBody.businesses[0].id;
  }


const getBizReviews = async (id) => {

  let reviews = await yelpClient.reviews(id)
  reviews = reviews.jsonBody.reviews.map(review => review.text)
  return reviews;
}


const getYelps = async (term, location) => {

  let id = await searchBiz(term, location);
  let yelpReviews = await getBizReviews(id);
  return yelpReviews;
};


const analyzeReviews = async (term, location, query) => {
  
  try {
    let tweetYelp = await Promise.all([getTweets(query), getYelps(term, location)]);
    tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
    let analysis = await textapi.sentiment({text: tweetYelp, mode: 'document'}, (err, res) => {console.log(res)});
    return analysis;
  } catch (err) {
    console.log(err);
  }
}  

analyzeReviews("taco bell", "richmond, va", "taco bell");