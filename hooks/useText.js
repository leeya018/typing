import { updateIndex, updateTexts } from "actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basicUrl, methods } from "util";
import useFetch from "./useFetch";

const createArr = (txt) => {
  return txt.split(" ");
};

export default function useText() {
  const { data, invoke } = useFetch();
  const { index, texts } = useSelector((state) => state.texts);
  const dispatch = useDispatch();

  console.log(texts);

  useEffect(() => {
    (async () => {
      await invoke(methods.GET, `${basicUrl}/api/text`);
    })();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      dispatch(updateTexts(data.map((item) => createArr(item.context))));
    }
  }, [data]);

  const getNewTxt = () => {
    const len = texts.length;
    const newInd = index === len - 1 ? 0 : index + 1;
    dispatch(updateIndex(newInd));
  };

  return { getNewTxt };
}
