export default function GoalHelper() {
  return <div>qusition </div>;
}

// import {
//   goalError,
//   addAnswer,
//   toggleModal,
//   updateIndex,
//   updateEngine,
// } from "actions";
// import Modal from "components/modal";
// import Loader from "features/loader";
// import useFetch from "hooks/useFetch";
// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { basicUrl } from "util";
// import { methods } from "util";

// export default function GoalHelper() {
//   // const [index, setIndex] = useState(0);
//   const [answer, setAnswer] = useState("");
//   // const [questions, setQuestions] = useState([]);
//   const dispatch = useDispatch();
//   const { index, answers } = useSelector((state) => state.engine);
//   const { success, loading, error, invoke } = useFetch();
//   const router = useRouter();
//   const inputRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const data = await invoke(methods.GET, `${basicUrl}/api/question`);
//       dispatch(updateEngine(data));
//       dispatch(updateIndex(answers.length));
//     })();
//   }, []);

//   // console.log({ questions });

//   useEffect(() => {
//     inputRef.current.focus();
//   }, [index]);

//   const submitAnswer = async () => {
//     await invoke(methods.POST, `${basicUrl}/api/answer`, {
//       question: questions[index].question,
//       answer,
//     });

//     // setIndex((prev) => {
//     if (prev + 1 === questions.length) {
//       router.push("/answers");
//       // return prev;
//     }
//     dispatch(updateIndex(index + 1));
//     // return prev + 1;
//     // });
//     setAnswer("");
//     inputRef.current.focus();
//   };
//   return (
//     <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
//       <div className="w-[50%] flex flex-col items-center">
//         <div className="font-bold border-2 rounded-lg border-black p-2 hover:shadow-md cursor-pointer w-full">
//           <Loader loading={loading} success={success} error={error} />

//           {questions.length > 0 && (
//             <div className="w-full flex flex-col items-center">
//               <h1 className=" w-full font-bold text-lg flex justify-center m-auto">
//                 {questions[index].category}
//               </h1>
//               <p className="w-full">{questions[index].question}</p>
//             </div>
//           )}
//         </div>
//         <textarea
//           ref={inputRef}
//           rows="5"
//           type="text"
//           value={answer}
//           onChange={(e) => {
//             setAnswer(e.target.value);
//           }}
//           className="w-full"
//         ></textarea>

//         <button
//           className="btn btn-primary "
//           disabled={answer === ""}
//           onClick={submitAnswer}
//         >
//           next
//         </button>
//       </div>
//     </div>
//   );
// }
