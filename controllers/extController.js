
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

module.exports = function(app) {
    app.get("/api/ext/tweets/:query", async (req, res) => {
        let tweets = await twitterClient.get('search/tweets', { q:req.params.query, count: 15 });
        tweets = tweets.statuses.map(tweet => tweet.text);
        return res.json(tweets);
    });

    getTweets = async (query) => {
        let tweets = await twitterClient.get('search/tweets', {q: query, count: 15});
        tweets = tweets.statuses.map(tweet => tweet.text)
        return tweets;
    };
    
    searchBiz = async (term, location) => {
        let client = await yelpClient.search({ term: term, location: location })
        console.log(`${client.jsonBody.businesses[0].name}: ${client.jsonBody.businesses[0].id}`);
        return client.jsonBody.businesses[0].id;
    };

    getBizReviews = async (id) => {
        let reviews = await yelpClient.reviews(id)
        reviews = reviews.jsonBody.reviews.map(review => review.text)
        return reviews;
    };

    getYelps = async (term, location) => {
        let id = await searchBiz(term, location);
        let yelpReviews = await getBizReviews(id);
        return yelpReviews;
    };

    app.get("/api/ext/yelps/:query", async (req, res) => {
        let id = await this.searchBiz(term, location);
        let yelpReviews = await this.getBizReviews(id);
        return res.json(yelpReviews);
    });

    app.get("/api/ext/sentiment/:query", async (req, res) => {
        let tweetYelp = await Promise.all([this.getTweets(query), this.getYelps(term, location)]);
        tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
        await textapi.sentiment({ text: tweetYelp, mode: 'document' }, (err, res) => { return res.json });
    });

    app.get("/api/ext/personality/:query",  async (req,res) => {
        let tweetYelp = await Promise.all([this.getTweets(query), this.getYelps(term, location)]);
        tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
        await personalityInsights.profile(
            { text: tweetYelp },
            (err, res) => {
                return JSON.stringify(res.tree.children[0].children[0].children)
            }
        )
    });
};

