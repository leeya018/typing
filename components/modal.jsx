import { toggleModal } from "actions";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

export default function Modal({}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const { text } = useSelector((state) => state.goal);

  const handleApprove = () => {
    router.push("/motivation");
  };

  const handleAbort = () => {
    dispatch(toggleModal(!isOpen));
  };
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed bottom-0 top-0 left-0 right-0 bg-gray-500 z-10 opacity-30 flex justify-center items-center"></div>
          <div className="absolute bg-white z-20 flex flex-col items-center rounded-xl">
            <div className=" p-2 mb-5 ">
              <span className="font-bold underline">
                are you happy with the goal?
              </span>
            </div>
            <span className="font-bold">{text}</span>
            <div className="mt-5">
              <button className="btn btn-success" onClick={handleApprove}>
                Yes
              </button>
              <button className="btn btn-danger" onClick={handleAbort}>
                No
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
