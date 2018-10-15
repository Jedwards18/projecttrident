
const AYLIENTextAPI = require('aylien_textapi');
const Twitter = require('twitter');
const yelp = require('yelp-fusion');
const PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');
require('dotenv').config()


const twitterClient = new Twitter({
    consumer_key: "mdQqcA4Wxr299VsGc9sxOjdfw",
    consumer_secret: "Cv3Npb3D4SJfyHkUwSYuPaC248o4PcRCAoYTiP1fvHfxNO0NQ5",
    access_token_key: "758504662022488064-vE7aMU0Zx6S9h52jwjsMOyzKQDMnZH9",
    access_token_secret: "HRo1s3VLeODyYinWfAPlfDFfR9EtSITO3DrwHXBELPbgG"
});
    
const yelpKey = "vIwje8dro-xaSqLXIibqTLqbRZItDLtD9zaQmKIpOXIzNHx4Gndpd-rnz-pWlZtyc50NPbaM6O-5BYria0XFufqX5-0Kn7Z3td_UXzAPpM1ixglWPze1HWAUCuXDW3Yx"
const yelpClient = yelp.client(yelpKey);
    
const textapi = new AYLIENTextAPI({
    application_id: "297378ca",
    application_key: "541a5c8142013a14cc4dca1084b86c28"
});
    
       
const personalityInsights = new PersonalityInsightsV2({
    username: "132449e4-afac-4400-aba4-a3007ae50147",
    password: "LGMuoNluKVxT",
    url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});

module.exports = ext = {
    getTweets: async (req, res) => {

        try { 
            let tweets = await twitterClient.get('search/tweets', { q: req.params.query, count: 10 });
            let tweetText = tweets.statuses.map(tweet => tweet.text)
            console.log('/n')
            console.log(tweetText)
            return tweetText;
        } catch (err) {
            console.log(err)
        }
    },
    
    //########################################################################
    searchBiz: async (term, location) => {

        let client = await yelpClient.search({ term: term, location: location })
        console.log('/n')
        console.log(`${client.jsonBody.businesses[0].name}: ${client.jsonBody.businesses[0].id}`);
        return client.jsonBody.businesses[0].id;
    },

    getBizReviews: async (id) => {
        
        let reviews = await yelpClient.reviews(id)
        reviews = reviews.jsonBody.reviews.map(review => review.text)
        return reviews;
    },

    getYelps: async (req, res) => {
        
        try {
            let id = await ext.searchBiz(req.params.term, req.params.location);
            let yelpReviews = await ext.getBizReviews(id);
            console.log('/n')
            console.log(yelpReviews)
            return yelpReviews
        } catch (err) {
            console.log(err)
        }
    },
    //#############################################################################
    intTweets: async (query) => {

        let tweets = await twitterClient.get('search/tweets', { q: query, count: 10 });
        let tweetText = tweets.statuses.map(tweet => tweet.text)
        // console.log(tweetText)
        return tweetText;
    },

    intYelps: async (term, location) => {

        let id = await ext.searchBiz(term, location);
        let yelpReviews = await ext.getBizReviews(id);
        // console.log(yelpReviews)
        return yelpReviews
    },

    getSentiment: async (req, res) => {
        
        try {
            let tweetYelp = await Promise.all([ext.intTweets(req.params.query), ext.intYelps(req.params.term, req.params.location)]);
            tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
            await textapi.sentiment({ text: tweetYelp, mode: 'document' }, (err, res) => { 
                console.log('/n')
                console.log(res)
                return res
            });
        } catch (err) {
            console.log(err)
        }
    },

    //#############################################################################
    getPersonality: async (req, res) => {
        
        try {
            let tweetYelp = await Promise.all([ext.intTweets(req.params.query), ext.intYelps(req.params.term, req.params.location)]);
            tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
            await personalityInsights.profile(
                { text: tweetYelp },
                (err, res) => {
                    console.log('/n')
                    console.log(JSON.stringify(res.tree.children[0].children[0].children, null, 1))
                    return JSON.stringify(res.tree.children[0].children[0].children)
                }   
            )
        } catch (err) {
            console.log(err)
        }
    },
};

