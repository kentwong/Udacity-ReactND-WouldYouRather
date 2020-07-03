import React, { Component, Fragment } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider,
} from "semantic-ui-react";
import { leaderboardData } from "./_data";

const trophyColor = ["yellow", "grey", "orange"];

export class LeaderBoard extends Component {
  render() {
    return (
      <Fragment>
        {leaderboardData.map((user, i) => (
          <Segment.Group key={user.id}>
            <Label corner="left" icon="trophy" color={trophyColor[i]} />
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column width={4} verticalAlign="middle">
                  <Image src={`/images/avatars/${user.avatar}`} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" textAlign="left">
                    {user.name}
                  </Header>
                  <Grid>
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    <Grid.Column width={4}>{user.answerCount}</Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    <Grid.Column width={4}>{user.questionCount}</Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    <Header as="h5" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="green" size="big">
                        {user.questionCount + user.answerCount}
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        ))}
      </Fragment>
    );
  }
}

export default LeaderBoard;
