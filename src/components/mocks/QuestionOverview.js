import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Button, Grid, Segment, Header, Image } from "semantic-ui-react";

class QuestionOverview extends Component {
  static propTypes = {
    qid: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    unanswered: PropTypes.bool.isRequired,
    onSetPage: PropTypes.func.isRequired,
  };

  state = {
    viewPoll: false,
  };

  handleClick = (e) => {
    this.props.onSetPage(!this.props.unanswered);
    this.setState((prevState) => ({
      viewPoll: !prevState.viewPoll,
    }));
  };

  render() {
    const { avatar, author, question, qid, unanswered } = this.props;

    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${qid}`} />;
    }

    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          {author} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={"/images/avatars/" + avatar} />
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as="h5" textAlign="left">
                Would you rather
              </Header>
              <p>
                {question}
                <br />
                or...
              </p>
              <Button
                color="green"
                size="tiny"
                fluid
                positive
                onClick={this.handleClick}
              >
                View Poll
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default QuestionOverview;
