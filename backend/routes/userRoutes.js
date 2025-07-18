const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.json(newUser);
});

router.get("/leaderboard", async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

module.exports = router;