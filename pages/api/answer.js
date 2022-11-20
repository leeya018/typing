import Answer from "@/models/answer";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect();

require("dotenv").config();
const handler = nc({ attachParams: true });

handler.post(async (req, res) => {
  const { answer, question } = req.body;

  console.log(req.body);
  if (answer === "") {
    return res.status(400).send("you have to fill answer");
  }
  if (question === "") {
    return res.status(400).send("you have to fill question");
  }
  try {
    const newAnswer = await Answer.create({
      question,
      answer,
    });
    res.status(200).send(newAnswer);
  } catch (err) {
    return res.status(500).json(err);
  }
});

handler.get(async (req, res) => {
  try {
    const answers = await Answer.find().select(["answer"]);

    res.status(200).send(answers);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default handler;
