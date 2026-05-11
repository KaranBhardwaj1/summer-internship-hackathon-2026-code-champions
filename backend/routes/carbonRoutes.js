const express = require("express");

const router = express.Router();

const {
  saveCarbonData,
  getCarbonData,
} = require("../controllers/carbonController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post("/", protect, saveCarbonData);

router.get("/", protect, getCarbonData);

module.exports = router;