
const mongoose = require("mongoose");

const pointHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: String,
  pointsClaimed: Number,
  claimedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PointHistory", pointHistorySchema);
