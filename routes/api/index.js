const router = require("express").Router();
const companyRoutes = require("./companyRoutes");
const extRoutes = require("./extRoutes")

router.use("/companies", companyRoutes);
router.use("/ext", extRoutes)

module.exports = router;
