const express = require("express");
const cors = require("cors");
const Transaction = require("./model/Transaction.cjs");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json("test ok3");
});

app.post("/api/transaction", async (req, res) => {
  console.log(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    res.status(500).json({ error: "Database connection failed" });
    return;
  });
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    name,
    description,
    datetime,
    price,
  });

  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  // console.log("heh", process.env.MONGO_URL);

  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();

  res.json(transactions);
});

app.listen(4040);

//
