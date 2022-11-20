import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: String,
  category: String,
});

module.exports =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);
