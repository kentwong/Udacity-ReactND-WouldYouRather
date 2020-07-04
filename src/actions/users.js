import { addAnswerToQuestion } from "../actions/questions";
import { saveQuestionAnswer } from "../utils/api";

export const GET_USERS = "GET_USERS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

function addAnswerToUser(loggedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    loggedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(loggedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addAnswerToUser(loggedUser, qid, answer));
    dispatch(addAnswerToQuestion(loggedUser, qid, answer));

    return saveQuestionAnswer(loggedUser, qid, answer).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    });
  };
}
