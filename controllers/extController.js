
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
            let tweets = await twitterClient.get('search/tweets', { q: req.params.query, lang: "en", count: 10 });
            tweets = tweets.statuses.map(tweet => tweet.text)
            console.log('*******************************************************************')
            console.log(tweets)
            return res.json(tweets)
        } catch (err) {
            console.log(err)
        }
    },
    
    //########################################################################
    searchBiz: async (term, location) => {

        let client = await yelpClient.search({ term: term, location: location })
        console.log('*******************************************************************')
        // console.log(`${client.jsonBody.businesses[0].name}: ${client.jsonBody.businesses[0].id}`);
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
            console.log('*******************************************************************')
            console.log(yelpReviews)
            return res.json(yelpReviews)
        } catch (err) {
            console.log(err)
        }
    },
    //#############################################################################
    intTweets: async (query) => {

        let tweets = await twitterClient.get('search/tweets', { q: query, lang: "en", count: 10 });
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
            let analysis = await textapi.sentiment({ text: tweetYelp, mode: 'document' }, (err, res) => { res.json(res) });
            // console.log(analysis);
            // return res.json(analysis);
        } catch (err) {
            console.log(err)
        }
    },

    //#############################################################################
    intPersonality: async (query, term, location) => {

        let tweetYelp = await Promise.all([ext.intTweets(query), ext.intYelps(term, location)]);
        tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
        await personalityInsights.profile({ text: tweetYelp }, (err, res) => { 
            return res
                // let pObj = res.tree.children[0].children[0].children
                //     .map(x => {
                //     return {"trait": x.id, "percentage": x.percentage} 
                //     });
                
                // return pObj;
            }
        )
    },
    
    getPersonality: async (req, res) => {
        
        try {
            let personality = await ext.intPersonality(req.params.query, req.params.term, req.params.location);
            console.log(personality);
            return res.json(personality);
        } catch (err) {
            console.log(err)
        }
    },
};

