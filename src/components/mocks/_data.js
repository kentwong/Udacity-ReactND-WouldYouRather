export const questionBank = {
  unanswered: [
    {
      qid: 1,
      author: "Kent Wong",
      avatar: "gent1.png",
      question: "become a superhero",
    },
    {
      qid: 2,
      author: "Ranger Liao",
      avatar: "gent2.png",
      question: "be telekinetic",
    },
    {
      qid: 3,
      author: "Carrie Guo",
      avatar: "lady1.png",
      question: "be a front-end developer",
    },
  ],
  answered: [
    {
      qid: 4,
      author: "Melanie Sun",
      avatar: "lady2.png",
      question: "find $50 yourself",
    },
    {
      qid: 5,
      author: "Tom Hank",
      avatar: "gent3.png",
      question: "write JavaScript",
    },
    {
      qid: 6,
      author: "Shay Christ",
      avatar: "lady3.png",
      question: "have horrible short term memory",
    },
  ],
};

export const questionDetails = {
  qid: 1,
  author: "Kent Wong",
  avatar: "gent1.png",
  optionOne: {
    votes: ["rangerliao", "carrieguo"],
    text: "Become a superhero.",
  },
  optionTwo: {
    votes: ["harley"],
    text: "Become a supervillan.",
  },
};

export const leaderboardData = [
  {
    id: "kentwong",
    name: "Kent Wong",
    avatar: "gent1.png",
    answerCount: 15,
    questionCount: 6,
  },
  {
    id: "rangerliao",
    name: "Ranger Liao",
    avatar: "gent2.png",
    answerCount: 10,
    questionCount: 4,
  },
  {
    id: "carrieguo",
    name: "Carrie Guo",
    avatar: "lady1.png",
    answerCount: 7,
    questionCount: 4,
  },
];

export const users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    // avatarURL: ,
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    // avatarURL: ,
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    // avatarURL: ,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

// export default userQuestionData;
