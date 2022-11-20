import { combineReducers } from "redux";
import * as types from "../types";

const initialTexts = {
  texts: [],
  error: "",
};

const textsReducer = (state = initialTexts, { type, payload }) => {
  switch (type) {
    case types.UPDATE_TEXTS:
      return { ...state, answers: payload };
    case types.ERROR_MOTIVATION:
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
