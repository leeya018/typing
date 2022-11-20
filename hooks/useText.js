import { useState, useEffect } from "react";
import { basicUrl, methods } from "util";
import useFetch from "./useFetch";

const createArr = (txt) => {
  return txt.split(" ");
};

export default function useText() {
  const [textArr, setTextArr] = useState();
  const { data, invoke } = useFetch();

  useEffect(() => {
    (async () => {
      await invoke(methods.GET, `${basicUrl}/api/text`);
    })();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setTextArr(createArr(data[0].context));
    }
  }, [data]);

  const createNewTxt = () => {
    // setTextArr(createArr(lorem.generateWords(200)));
  };

  return [textArr, createNewTxt];
}
