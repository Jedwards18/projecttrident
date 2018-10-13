import axios from "axios";

const AYLIENTextAPI = require('aylien_textapi');
const Twitter = require('twitter');
const yelp = require('yelp-fusion');
require('dotenv').config()

const twitterClient = new Twitter({
    consumer_key: "mdQqcA4Wxr299VsGc9sxOjdfw",
    consumer_secret: "Cv3Npb3D4SJfyHkUwSYuPaC248o4PcRCAoYTiP1fvHfxNO0NQ5",
    access_token_key: "758504662022488064-vE7aMU0Zx6S9h52jwjsMOyzKQDMnZH9",
    access_token_secret: "HRo1s3VLeODyYinWfAPlfDFfR9EtSITO3DrwHXBELPbgG"
});

const yelpKey = "_KhbuC8HXqKq-g3iKKJ0ZCKYk20JwBCiSSuA-D3ZdpUMOSrGRI--gylsgBjAt5_dD5VE6tNZyUQj1OfFVvFGdJIQrTUuN8IOHkCFNoSglaX5lYI7EnqG1mTMIivW3Yx"
const yelpClient = yelp.client(yelpKey);

const textapi = new AYLIENTextAPI({
    application_id: "297378ca",
    application_key: "541a5c8142013a14cc4dca1084b86c28"
});

var PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');
require('dotenv').config()

var personalityInsights = new PersonalityInsightsV2({
    username: "132449e4-afac-4400-aba4-a3007ae50147",
    password: "LGMuoNluKVxT",
    url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});

export default {
    getTweets: async (query) => {

        let tweets = await twitterClient.get('search/tweets', { q: query, count: 10 });
        let tweetText = tweets.statuses.map(tweet => tweet.text)
        return tweetText;
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

        let id = await this.searchBiz(term, location);
        let yelpReviews = await this.getBizReviews(id);
        return yelpReviews;
    },


    analyzeReviews: async (term, location, query) => {
        
        try {
            let tweetYelp = await Promise.all([this.getTweets(query), this.getYelps(term, location)]);
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
            let yelpHelp = await this.getYelps(term, location);
            yelpHelp = yelpHelp.toString();
            let analysis = await textapi.sentiment({ text: yelpHelp, mode: 'document' }, (err, res) => { console.log(res) });
        }
        catch (err) {
            console.log(err);
        }
    },

    testWatson: async (term, location, query) => {

        try {
            let tweetYelp = await Promise.all([this.getTweets(query), this.getYelps(term, location)]);
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