import { combineReducers } from "redux";
import * as types from "../types";

const initialTexts = {
  texts: [],
  error: "",
  index: 0,
};

const textsReducer = (state = initialTexts, { type, payload }) => {
  switch (type) {
    case types.UPDATE_TEXTS:
      return { ...state, texts: payload };
    case types.UPDATE_INDEX:
      return { ...state, index: payload };
    case types.ERROR_TEXTS:
      return { ...state, error: payload };

    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  texts: textsReducer,
};

export default combineReducers(reducers);
