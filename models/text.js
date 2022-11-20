import mongoose from "mongoose";

const TextSchema = new mongoose.Schema({
  text: String,
  category: String,
});

module.exports = mongoose.models.Text || mongoose.model("Text", TextSchema);
