const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", aiRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const carbonRoutes = require("./routes/carbonRoutes");
app.use("/api/carbon", carbonRoutes);

app.get("/", (req, res) => {
  res.send("CarbonIQ API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});