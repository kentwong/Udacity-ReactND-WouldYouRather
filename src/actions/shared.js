import { getData } from "../utils/api";
import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";

export function handleData() {
  return (dispatch) => {
    return getData().then(({ users, questions }) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
    });
  };
}
