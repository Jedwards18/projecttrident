const router = require("express").Router();
const companiesController = require("../../controllers/companiesController");

router.route("/")
  .get(companiesController.findAll)
  .post(companiesController.create);

router.route("/:id")
  .get(companiesController.findById)
  .put(companiesController.update)
  .delete(companiesController.remove);

module.exports = router;
