const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/nexticket",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const userRoutes = require("./routes/users");
const ticketRoutes = require("./routes/tickets");
const knowledgeRoutes = require("./routes/knowledge");

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/knowledge", knowledgeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
