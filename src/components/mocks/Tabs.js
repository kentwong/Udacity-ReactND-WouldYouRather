import React, { Component } from "react";
import { Button, Grid, Segment, Tab } from "semantic-ui-react";
import Question from "./Question";

const questionBank = {
  unanswered: [
    {
      user: "Kent Wong",
      avatar: "gent1.png",
      question: "become a superhero",
    },
    {
      user: "Ranger Liao",
      avatar: "gent2.png",
      question: "be telekinetic",
    },
    {
      user: "Carrie Guo",
      avatar: "lady1.png",
      question: "be a front-end developer",
    },
  ],
  answered: [
    {
      user: "Melanie Sun",
      avatar: "lady2.png",
      question: "find $50 yourself",
    },
    {
      user: "Tom Hank",
      avatar: "gent3.png",
      question: "write JavaScript",
    },
    {
      user: "Shay Christ",
      avatar: "lady3.png",
      question: "have horrible short term memory",
    },
  ],
};

const panes = [
  {
    menuItem: "Unanswered",
    render: () => (
      <Tab.Pane>
        {questionBank.unanswered.map((question) => (
          <Question key={question.user} {...question} />
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
        {questionBank.answered.map((question) => (
          <Question key={question.user} {...question} />
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

export default Tabs;
