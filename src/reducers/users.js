import { GET_USERS, ADD_ANSWER_TO_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_USER:
      const { loggedUser, qid, answer } = action;

      return {
        ...state,
        [loggedUser]: {
          ...state[loggedUser],
          answers: {
            ...state[loggedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
