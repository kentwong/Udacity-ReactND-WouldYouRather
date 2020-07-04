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
