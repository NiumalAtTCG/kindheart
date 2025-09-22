const router = require("express").Router();
const { checkout } = require("../controllers/checkout.controller");

// Define routes
router.post("/checkout", checkout);

module.exports = router;
