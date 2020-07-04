import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab } from "semantic-ui-react";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";

class Home extends Component {
  static propTypes = {
    userQuestionData: PropTypes.object.isRequired,
  };
  render() {
    const { userQuestionData } = this.props;
    return <Tab panes={panes({ userQuestionData })} className="tab" />;
  }
}

const panes = (props) => {
  const { userQuestionData } = props;
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map((question) => (
            <QuestionCard
              key={question.qid}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map((question) => (
            <QuestionCard
              key={question.qid}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

function mapStateToProps({ loggedUser, users, questions }) {
  const answeredIds = Object.keys(users[loggedUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
}

export default connect(mapStateToProps)(Home);
