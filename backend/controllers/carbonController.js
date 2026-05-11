const CarbonData = require("../models/CarbonData");


// SAVE DATA
const saveCarbonData = async (req, res) => {
  try {
    const data = await CarbonData.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET USER DATA
const getCarbonData = async (req, res) => {
  try {
    const data = await CarbonData.find({
      userId: req.user.id,
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveCarbonData,
  getCarbonData,
};