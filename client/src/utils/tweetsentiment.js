const AYLIENTextAPI = require('aylien_textapi');
const Twitter = require('twitter');
require('dotenv').config()

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const textapi = new AYLIENTextAPI({
  application_id: process.env.AYLIEN_APPLICATION_ID,
  application_key: process.env.AYLIEN_APPLICATION_KEY
});

const fetchAnalTweets = async (query) => {

    try {
      let tweets = await client.get('search/tweets', {q: query, count: 10});
      let tweetText = tweets.statuses.map(tweet => tweet.text);
      console.log(tweetText);
      let tweetAnal = await textapi.sentiment({text: tweetText, mode: 'tweet'}, (err,res) => {console.log(res)});
    }
    catch (err) {
      console.log(err);
    }
}


fetchAnalTweets("trees");

// Input the query term as a parameter. Will console log the text of 10 tweets with query word in it and perform
// a sentiment analysis on the tweets.

