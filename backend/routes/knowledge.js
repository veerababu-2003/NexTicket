const express = require("express");
const Knowledge = require("../models/Knowledge");

const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
  const articles = await Knowledge.find();
  res.json(articles);
});

// Create article
router.post("/", async (req, res) => {
  const article = new Knowledge(req.body);
  await article.save();
  res.status(201).json(article);
});

module.exports = router;
