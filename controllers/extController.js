
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

const yelpKey = process.env.YELP_KEY;
const yelpClient = yelp.client(yelpKey);

const textapi = new AYLIENTextAPI({
    application_id: process.env.AYLIEN_APPLICATION_ID,
    application_key: process.env.AYLIEN_APPLICATION_KEY
});

var PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');
require('dotenv').config()

var personalityInsights = new PersonalityInsightsV2({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PW,
    url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});

module.exports = {
    getTweets: async (query) => {

        try { 
            let tweets = await twitterClient.get('search/tweets', { q: query, count: 10 });
            let tweetText = tweets.statuses.map(tweet => tweet.text)
            console.log(tweetText)
            return tweetText;
        } catch (err) {
            console.log(err)
        }
    },

    searchBiz: async (term, location) => {

        let client = await yelpClient.search({ term: term, location: location })
        console.log(`${client.jsonBody.businesses[0].name}: ${client.jsonBody.businesses[0].id}`);
        return client.jsonBody.businesses[0].id;
    },

    getBizReviews: async (id) => {

        let reviews = await yelpClient.reviews(id)
        reviews = reviews.jsonBody.reviews.map(review => review.text)
        return reviews;
    },

    getYelps: async (term, location) => {

        try {
            let id = await externalAPI.searchBiz(term, location);
            let yelpReviews = await externalAPI.getBizReviews(id);
            return yelpReviews;
        }
        catch (err) {
            console.log(err)
        }
    },

    analyzeReviews: async (term, location, query) => {
        
        try {
            let tweetYelp = await Promise.all([externalAPI.getTweets(query), externalAPI.getYelps(term, location)]);
            tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
            let analysis = await textapi.sentiment({ text: tweetYelp, mode: 'document' }, (err, res) => { console.log(res) });
            return analysis;
        } 
        catch (err) {
            console.log(err);
        }
    },

    analyzeYelp: async (term, location) => {

        try {
            let yelpHelp = await externalAPI.getYelps(term, location);
            yelpHelp = yelpHelp.toString();
            let analysis = await textapi.sentiment({ text: yelpHelp, mode: 'document' }, (err, res) => { console.log(res) });
        }
        catch (err) {
            console.log(err);
        }
    },

    testWatson: async (term, location, query) => {

        try {
            let tweetYelp = await Promise.all([externalAPI.getTweets(query), externalAPI.getYelps(term, location)]);
            tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
            let analysis = await personalityInsights.profile(
                { text: tweetYelp },
                function (err, res) {
                    if (err) {
                        console.log('error:', err);
                    } else {
                        console.log(JSON.stringify(res, null, 2));
                    }
                }
            )
        } catch (err) {
            console.log(err);
        }
    }
};

