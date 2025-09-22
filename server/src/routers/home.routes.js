const router = require("express").Router();
const { home } = require("../controllers/home.controller");

// Define routes
router.get("/", home);

module.exports = router;
