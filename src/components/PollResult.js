import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

export class PollResult extends Component {
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.props;

    return (
      <Fragment>
        <Header as="h3">Results:</Header>
        <Segment style={{ backgroundColor: "honeydew" }}>
          <Label color="orange" ribbon="right">
            <Icon name="star" className="compact" />
            Your Vote
          </Label>
          <p style={{ fontWeight: "bold" }}>{optionOne.text}</p>
          <Progress percent={((2 / 3) * 100).toFixed(1)} progress color="green">
            2 out of 3 votes
          </Progress>
        </Segment>
        <Segment style={{ backgroundColor: "#f4f4f4" }}>
          <p style={{ fontWeight: "bold" }}>{optionTwo.text}</p>
          <Progress percent={((1 / 3) * 100).toFixed(1)} progress>
            1 out of 3 votes
          </Progress>
        </Segment>
        <Button size="tiny" floated="left" onClick={this.handleClick}>
          Back
        </Button>
      </Fragment>
    );
  }
}

export default withRouter(PollResult);
