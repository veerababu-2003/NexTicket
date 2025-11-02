const express = require("express");
const Ticket = require("../models/Ticket");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all tickets
router.get("/", auth, async (req, res) => {
  const tickets = await Ticket.find().populate("assignedTo createdBy");
  res.json(tickets);
});

// Create ticket
router.post("/", auth, async (req, res) => {
  const { title, description, category, priority } = req.body;
  let cat = category;
  let pri = priority;
  if (!category || !priority) {
    // Call AI service
    const axios = require("axios");
    try {
      const catRes = await axios.post("http://localhost:5001/categorize", {
        description,
      });
      cat = catRes.data.category;
      const priRes = await axios.post("http://localhost:5001/prioritize", {
        description,
      });
      pri = priRes.data.priority;
    } catch (err) {
      console.error("AI service error:", err.message);
      return res.status(500).json({ error: "AI service unavailable" });
    }
  }
  const ticket = new Ticket({
    title,
    description,
    category: cat,
    priority: pri,
    createdBy: req.user.id,
  });
  await ticket.save();
  res.status(201).json(ticket);
});

// Update ticket
router.put("/:id", auth, async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(ticket);
});

module.exports = router;
