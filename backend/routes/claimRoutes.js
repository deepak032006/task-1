const express = require("express");
const router = express.Router();
const User = require("../models/User");
const PointHistory = require("../models/PointHistory");

router.post("/", async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  const history = new PointHistory({
    userId,
    userName: user.name,
    pointsClaimed: points,
  });
  await history.save();

  res.json({ user, points });
});

router.get("/history", async (req, res) => {
  const history = await PointHistory.find().sort({ claimedAt: -1 });
  res.json(history);
});

module.exports = router;
