import { combineReducers } from "redux";
import * as types from "./types";

// const questions = [
//   "What it will give you ? short and long term?",
//   "What are the reasons for that? ",
//   "What you will gain from getting those goals?",
//   "By getting those goals, how would your life will look like ?",
// ];

const goalReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.UPDATE_GOAL:
      return { ...state, text: payload };
    case types.ERROR_GOAL:
      return { ...state, error: payload };
    case types.ANSWER_GOAL:
      return { ...state, answers: payload };

    default:
      return state;
  }
};

const initialModal = {
  isOpen: false,
};

const modalReducer = (state = initialModal, { type, payload }) => {
  switch (type) {
    case types.TOGGLE_MODAL:
      return { ...state, isOpen: payload };

    default:
      return state;
  }
};

const questionsM = [
  "What it will give you ? short and long term? ",
  "What are the reasons for that ?",
  "What you will gain from getting those goals?",
  "What you will gain from getting those goals?",
];

const initialMotivation = {
  questions: [...questionsM],
  answers: [],
  error: "",
};

const motivationReducer = (state = initialMotivation, { type, payload }) => {
  switch (type) {
    case types.ANSWER_MOTIVATION:
      return { ...state, answers: payload };
    case types.ERROR_MOTIVATION:
      return { ...state, error: payload };

    default:
      return state;
  }
};

const questionsE = [
  "if you knew that nothing bad can happened to you , what woyuld you do ?",
  "",
];
const initialCreateEngine = {
  questions: [...questionsE],
  answers: [],
  error: "",
  index: 0,
};

const engineReducer = (state = initialCreateEngine, { type, payload }) => {
  switch (type) {
    case types.UPDATE_ENGINE:
      return { payload };
    case types.ANSWER_ENGINE:
      return { ...state, answers: payload };
    case types.ERROR_ENGINE:
      return { ...state, error: payload };
    case types.UPDATE_INDEX:
      return { ...state, index: payload };

    default:
      return state;
  }
};
// COMBINED REDUCERS
const reducers = {
  goal: goalReducer,
  modal: modalReducer,
  motivation: motivationReducer,
  engine: engineReducer,
};

export default combineReducers(reducers);
