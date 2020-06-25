import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import { Button, Image, Grid, Header, Segment } from "semantic-ui-react";

const Question = (props) => (
  <Segment.Group>
    <Header as="h5" textAlign="left" block attached="top">
      Kent Wong asks:
    </Header>
    <Grid divided padded>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={"/images/avatars/" + props.avatar} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h5" textAlign="left">
            Would you rather
          </Header>
          <p>
            run naked
            <br />
            or...
          </p>
          <Button color="green" size="tiny" fluid positive>
            View Poll
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment.Group>
);

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
          padded
        >
          <Grid.Column style={{ maxWidth: 600 }}>
            <Grid.Row>
              <Segment.Group>
                <Button.Group attached="top">
                  <Button primary>Unanswered</Button>
                  <Button toggle>Answered</Button>
                </Button.Group>
                <Segment>
                  <Question avatar={"gent1.png"} />
                  <Question avatar={"gent2.png"} />
                  <Question avatar={"lady1.png"} />
                </Segment>
              </Segment.Group>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
