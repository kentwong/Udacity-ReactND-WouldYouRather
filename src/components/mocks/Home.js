import React, { Component } from "react";
import { Button, Grid, Segment, Tab } from "semantic-ui-react";
import QuestionOverview from "./QuestionOverview";
import { questionBank } from "./_data";

class Home extends Component {
  render() {
    return <Tabs />;
  }
}

const panes = [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {questionBank.unanswered.map((question) => (
          <QuestionOverview key={question.user} {...question} />
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {questionBank.answered.map((question) => (
          <QuestionOverview key={question.user} {...question} />
        ))}
      </Tab.Pane>
    ),
  },
];

class Tabs extends Component {
  render() {
    return (
      <Grid centered padded>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 600 }}>
            <Tab panes={panes} className="tab" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
