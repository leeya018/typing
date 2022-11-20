import * as types from "./types";
import { store } from "./store";
console.log({ store });
export const updateGoal = (goal) => ({
  type: types.UPDATE_GOAL,
  payload: goal,
});
export const goalError = (error) => ({
  type: types.ERROR_GOAL,
  payload: error,
});
export const addAnswer = (newAnswer, index) => {
  // get the store
  const answers = store.getState().goal.answers;
  let answersDup = [...answers];
  answersDup[index] = newAnswer;
  return {
    type: types.ANSWER_GOAL,
    payload: answersDup,
  };
};

export const toggleModal = (isOpen) => ({
  type: types.TOGGLE_MODAL,
  payload: isOpen,
});
export const addAnswerMotivation = (newAnswer, index) => {
  const answers = store.getState().motivation.answers;
  let answersDup = [...answers];
  answersDup[index] = newAnswer;
  return {
    type: types.ANSWER_MOTIVATION,
    payload: answersDup,
  };
};

export const motivationError = (error) => ({
  type: types.ERROR_MOTIVATION,
  payload: error,
});

export const addAnswerEngine = (newAnswer, index) => {
  const answers = store.getState().engine.answers;
  let answersDup = [...answers];
  answersDup[index] = newAnswer;
  return {
    type: types.ANSWER_ENGINE,
    payload: answersDup,
  };
};

export const engineError = (error) => ({
  type: types.ERROR_ENGINE,
  payload: error,
});
export const updateIndex = (index) => ({
  type: types.UPDATE_INDEX,
  payload: index,
});
export const updateEngine = (data) => ({
  type: types.UPDATE_ENGINE,
  payload: data,
});
