import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tab } from "semantic-ui-react";
import QuestionOverview from "./QuestionOverview";
import { questionBank } from "./mocks/_data";

class Home extends Component {
  static propTypes = {
    onSetPage: PropTypes.func.isRequired,
  };
  render() {
    return <Tabs onSetPage={this.props.onSetPage} />;
  }
}

const panes = (props) => [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {questionBank.unanswered.map((question) => (
          <QuestionOverview
            key={question.qid}
            {...question}
            unanswered={true}
            {...props}
          />
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {questionBank.answered.map((question) => (
          <QuestionOverview
            key={question.qid}
            {...question}
            unanswered={false}
            {...props}
          />
        ))}
      </Tab.Pane>
    ),
  },
];

class Tabs extends Component {
  render() {
    return <Tab panes={panes(this.props)} className="tab" />;
  }
}

export default Home;
