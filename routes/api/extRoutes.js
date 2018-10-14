const router = require("express").Router();
const extController = require("../../controllers/extController");

router.route("/sentiment")
  .get(extController.analyzeReviews);

router.route("/personality")
  .get(extController.testWatson);

router.route("/tweets")
  .get(extController.getTweets);

router.route("/yelps")
  .get(extController.getYelps);

module.exports = router;
