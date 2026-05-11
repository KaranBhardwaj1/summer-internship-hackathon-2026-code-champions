const express = require("express");

const router = express.Router();

const {
  generateAIInsights,
} = require("../controllers/aiController");

router.post(
  "/generate",
  generateAIInsights
);

module.exports = router;