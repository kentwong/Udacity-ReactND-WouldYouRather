import React, { Component } from "react";
import { Segment, Header, Grid, Image } from "semantic-ui-react";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";

export class PollContainer extends Component {
  state = {
    showPage: this.props.showPage,
  };

  handleSubmit = (val) => {
    // console.log('val', val);
    this.setState({
      showPage: true,
    });
  };

  render() {
    const { avatar, author } = this.props;

    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          {author} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={`/images/avatars/${avatar}`} />
            </Grid.Column>
            <Grid.Column width={11}>
              {this.state.showPage === false ? (
                <PollQuestion {...this.props} onSubmit={this.handleSubmit} />
              ) : (
                <PollResult {...this.props} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default PollContainer;
