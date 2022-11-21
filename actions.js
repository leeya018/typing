import * as types from "./types";
import { store } from "./store";
console.log({ store });

export const updateTexts = (texts) => {
  return {
    type: types.UPDATE_TEXTS,
    payload: texts,
  };
};

export const textError = (error) => ({
  type: types.ERROR_TEXTS,
  payload: error,
});

export const updateIndex = (index) => ({
  type: types.UPDATE_INDEX,
  payload: index,
});
