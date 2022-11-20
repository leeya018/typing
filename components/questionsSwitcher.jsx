import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function QuestionSwithcer({
  addAnswer,
  errorHandle,
  error,
  questions,
  answers,
  nextLink,
}) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    if (answers[index]) {
      setAnswer(answers[index]);
    }
  }, [index]);
  //22.12 -

  useEffect(() => {
    if (answers.length === questions.length) {
      setIsShow(true);
    }
  }, [answer]);

  const getNextQuestion = () => {
    if (!answer && !answers[index]) {
      dispatch(errorHandle("answer the question"));
      return;
    }
    dispatch(addAnswer(answer, index));
    setAnswer("");
    setIndex((prev) => (prev + 1) % questions.length);
    inputRef.current.focus();
  };

  const getNextQuestionOnPress = (e) => {
    if (e.key === "Enter") {
      getNextQuestion();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      {error && <span className="text-red-500">{error}</span>}

      <span
        className="font-bold border-2 rounded-lg border-black p-2 hover:shadow-md cursor-pointer"
        onClick={getNextQuestion}
      >
        {questions[index]}
      </span>
      <input
        ref={inputRef}
        type="text"
        value={answer}
        onKeyDown={getNextQuestionOnPress}
        onChange={(e) => {
          dispatch(errorHandle(""));
          setAnswer(e.target.value);
        }}
        className="input-group-text"
      />
      {isShow && (
        <div className="flex flex-col">
          <span>
            if you are happy with your answers , you can proceed to the next
            stage
          </span>
          <button
            className="btn btn-primary"
            onClick={() => router.push(`/${nextLink}`)}
          >
            next stage
          </button>
        </div>
      )}
    </div>
  );
}
