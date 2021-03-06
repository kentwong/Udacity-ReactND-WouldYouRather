let users = {
  kentwong: {
    id: "kentwong",
    name: "Kent Wong",
    avatarURL: "/images/avatars/gent1.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  rangerliao: {
    id: "rangerliao",
    name: "Ranger Liao",
    avatarURL: "/images/avatars/gent2.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },

    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  carrieguo: {
    id: "carrieguo",
    name: "Carrie Guo",
    avatarURL: "/images/avatars/lady1.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  nellahastings: {
    id: "nellahastings",
    name: "Nella Hastings",
    avatarURL: "/images/avatars/lady2.png",
    answers: {},
    questions: [],
  },
  davidgarza: {
    id: "davidgarza",
    name: "David Garza",
    avatarURL: "/images/avatars/gent3.png",
    answers: {},
    questions: [],
  },
  robbiehaas: {
    id: "robbiehaas",
    name: "Robbie Haas",
    avatarURL: "/images/avatars/lady3.png",
    answers: {},
    questions: [],
  },
  kelisa: {
    id: "kelisa",
    name: "Kelise Shepherd",
    avatarURL: "/images/avatars/lady4.png",
    answers: {},
    questions: [],
  },
  mariyah: {
    id: "mariyah",
    name: "Mariyah Knott",
    avatarURL: "/images/avatars/lady5.png",
    answers: {},
    questions: [],
  },
  martyn: {
    id: "martyn",
    name: "Martyn Lambert",
    avatarURL: "/images/avatars/gent4.png",
    answers: {},
    questions: [],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "kentwong",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["kentwong"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "rangerliao",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["rangerliao", "kentwong"],
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "kentwong",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["kentwong"],
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "carrieguo",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["kentwong"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "carrieguo",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["carrieguo"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["rangerliao"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "rangerliao",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["rangerliao"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["carrieguo"],
      text: "write Swift",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const loggedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [loggedUser]: {
          ...users[loggedUser],
          questions: users[loggedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ loggedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [loggedUser]: {
          ...users[loggedUser],
          answers: {
            ...users[loggedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([loggedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
