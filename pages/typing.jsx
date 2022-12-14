import useText from "hooks/useText";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const COLORS = {
  green: "bg-green-500",
  red: "bg-red-500",
  blue: "bg-blue-200",
};

const TOTAL_TIME = 60;
let interval;
const mode = "You have a minute";

export default function Typing({}) {
  const [charInd, setCharInd] = useState(0);
  const { getNewTxt } = useText();
  const [colorArr, setColorArr] = useState([]);
  const [myWord, setMyWord] = useState("");
  const [result, setResult] = useState({ amountCorrect: 0, amountWrong: 0 });
  const [seconds, setSeconds] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const { index, texts } = useSelector((state) => state.texts);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isDone) {
      clearInterval(interval);
    }
  }, [isDone]);

  useEffect(() => {
    if (texts && texts.length > 0) {
      inputRef.current.focus();
      startInerval();
    }
    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    if (seconds === TOTAL_TIME) {
      setIsDone(true);
      calcScore();
    }
  }, [seconds]);

  useEffect(() => {
    checkIfDone();
  }, [charInd]);

  const checkIfDone = () => {
    if (colorArr.length === texts[0]?.length) {
      calcScore();
    }
  };

  const startInerval = () => {
    interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const calcScore = () => {
    const amountCorrect = colorArr.filter(
      (color) => color === COLORS.green
    ).length;
    const amountWrong = colorArr.filter((color) => color === COLORS.red).length;
    setResult({ amountCorrect, amountWrong });

    setIsDone(true);
  };

  console.log({ index });
  const handleChange = (e) => {
    console.log(e.target.value);
    const word = e.target.value;
    if (word[word.length - 1] === " ") {
      if (word.length > 1) {
        checkFit(word.substring(0, word.length - 1));
        setCharInd((prev) => prev + 1);
      }
      setMyWord("");

      return;
    }
    setMyWord(word);
  };

  const checkFit = (word) => {
    if (texts[index][charInd] === word) {
      setColorArr((prev) => [...prev, COLORS.green]);
    } else {
      setColorArr((prev) => [...prev, COLORS.red]);
    }
  };

  const format = (arrTxt) => {
    return (
      //   <div className="h-14 overflow-hidden">
      <div className="">
        {arrTxt &&
          arrTxt.map((txt, ind) => (
            <span key={ind} className={colorArr[ind]}>
              {txt}{" "}
            </span>
          ))}
      </div>
    );
  };
  //   console.log(colorArr);

  const restartAgain = () => {
    setSeconds(0);
    setIsDone(false);
    setColorArr([]);
    setResult({ amountCorrect: 0, amountWrong: 0 });
    setMyWord("");

    setCharInd(0);
    clearInterval(interval);
    startInerval();
    inputRef.current.focus();
  };
  const restartNext = () => {
    restartAgain();
    getNewTxt();
  };

  return (
    <div>
      <div className="flex justify-between">
        <button className="btn btn-primary" onClick={restartNext}>
          restart
        </button>

        <button className="btn btn-primary" onClick={restartAgain}>
          again
        </button>
      </div>
      <h1 className="font-bold text-4xl">typing </h1>
      <h2 className="font-bold text-xl">{mode}</h2>
      <p className="text-bold">timer : {seconds} </p>
      {format(texts[index])}
      <input
        disabled={isDone}
        ref={inputRef}
        placeholder="text"
        type="text"
        value={myWord}
        onChange={handleChange}
        className="input-group-text w-full"
      />
      <div hidden={!isDone}>
        <h2>result: </h2>
        <p className={COLORS.green}>correct : {result.amountCorrect}</p>
        <p className={COLORS.red}>correct : {result.amountWrong}</p>
        <p className={COLORS.blue}>WPM : {result.amountCorrect}</p>
      </div>
    </div>
  );
}
