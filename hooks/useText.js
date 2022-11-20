import { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

const createArr = (txt) => {
  return txt.split(" ");
};
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
export default function useText() {
  const [textArr, setTextArr] = useState();

  useEffect(() => {
    setTextArr(createArr(lorem.generateWords(200)));
  }, []);

  const createNewTxt = () => {
    setTextArr(createArr(lorem.generateWords(200)));
  };

  return [textArr, createNewTxt];
}
