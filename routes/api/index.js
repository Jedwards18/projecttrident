const router = require("express").Router();
const companyRoutes = require("./companies");

// Book routes
router.use("/companies", companyRoutes);

module.exports = router;
