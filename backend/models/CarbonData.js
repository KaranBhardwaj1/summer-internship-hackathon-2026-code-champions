const mongoose = require("mongoose");

const carbonDataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    electricityUsage: Number,

    fuelUsage: Number,

    transportUsage: Number,

    foodWaste: Number,

    electricityEmission: Number,

    fuelEmission: Number,

    transportEmission: Number,

    foodWasteEmission: Number,

    totalEmission: Number,

    recommendations: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CarbonData",
  carbonDataSchema
);