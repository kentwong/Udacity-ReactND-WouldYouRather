import { saveQuestion } from "../utils/api";
import { addQuestionToUser } from "../actions/users";

export const GET_QUESTIONS = "GET_QUESTIONS";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

export function addAnswerToQuestion(loggedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    loggedUser,
    qid,
    answer,
  };
}

export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}
