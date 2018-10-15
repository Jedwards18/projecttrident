const router = require("express").Router();
const extController = require("../../controllers/extController");

// "/api/ext/sentiment/:query"
router.route("/sentiment/:query/:term/:location")
  .get(extController.getSentiment);

  // "/api/ext/personality/:query"
router.route("/personality/:query/:term/:location")
  .get(extController.getPersonality);

// "/api/ext/tweets/:query"
router.route("/tweets/:query")
  .get(extController.getTweets);

  // "/api/ext/yelps/:query"
router.route("/yelps/:term/:location")
  .get(extController.getYelps);

module.exports = router;
