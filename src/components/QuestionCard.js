import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";
import QuestionOverview from "./QuestionOverview";

const pollTypes = {
  POLL_TEASER: "POLL_TEASER",
  POLL_QUESTION: "POLL_QUESTION",
  POLL_RESULT: "POLL_RESULT",
};

const PollContent = (props) => {
  const { pollType, question, unanswered } = props;

  switch (pollType) {
    case pollTypes.POLL_TEASER:
      return <QuestionOverview question={question} unanswered={unanswered} />;
    case pollTypes.POLL_QUESTION:
      return <PollQuestion question={question} />;
    case pollTypes.POLL_RESULT:
      return <PollResult question={question} />;
    default:
      return;
  }
};

export class QuestionCard extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    pollType: PropTypes.string.isRequired,
    unanswered: PropTypes.bool,
    question_id: PropTypes.string,
  };
  render() {
    const { author, question, pollType, unanswered = null } = this.props;
    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top" style={{}}>
          {author.name} asks:
        </Header>

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={author.avatarURL} />
            </Grid.Column>
            <Grid.Column width={11}>
              <PollContent
                pollType={pollType}
                question={question}
                unanswered={unanswered}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

function mapStateToProps(
  { users, questions, loggedUser },
  { match, question_id }
) {
  let question, pollType;
  if (question_id !== undefined) {
    question = questions[question_id];
    pollType = pollTypes.POLL_TEASER;
  } else {
    const { question_id } = match.params;
    question = questions[question_id];
    const user = users[loggedUser];

    pollType = pollTypes.POLL_QUESTION;
    if (Object.keys(user.answers).includes(question.id)) {
      pollType = pollTypes.POLL_RESULT;
    }
  }
  const author = users[question.author];

  return {
    question,
    author,
    pollType,
  };
}

export default connect(mapStateToProps)(QuestionCard);
