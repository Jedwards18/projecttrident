const router = require("express").Router();
const companiesController = require("../../controllers/companiesController");

// "/api/companies/"
router.route("/")
  .get(companiesController.findAll)
  .post(companiesController.create);
// "/api/companies/:id"
router.route("/:id")
  .get(companiesController.findById)
  .put(companiesController.update)
  .delete(companiesController.remove);

module.exports = router;
