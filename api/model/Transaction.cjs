const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  price: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  datetime: { type: Date, required: true },
});

const transactionModel = model("Transaction", transactionSchema);

module.exports = transactionModel;
