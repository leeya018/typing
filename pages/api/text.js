import Text from "@/models/text";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect();

require("dotenv").config();
const handler = nc({ attachParams: true });

// handler.post(async (req, res) => {
//   const { Text, question } = req.body;

//   console.log(req.body);
//   if (Text === "") {
//     return res.status(400).send("you have to fill Text");
//   }
//   if (question === "") {
//     return res.status(400).send("you have to fill question");
//   }
//   try {
//     const newText = await Text.create({
//       question,
//       Text,
//     });
//     res.status(200).send(newText);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

handler.get(async (req, res) => {
  try {
    const texts = await Text.find();

    res.status(200).send(texts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default handler;
