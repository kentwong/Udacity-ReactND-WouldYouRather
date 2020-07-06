import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Form,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
  static propTypes = {
    loggedUser: PropTypes.string.isRequired,
    handleSaveQuestion: PropTypes.func.isRequired,
  };

  state = {
    validSubmit: false,
    isLoading: false,
    option1: "",
    option2: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { loggedUser, handleSaveQuestion } = this.props;
    const { option1, option2 } = this.state;

    new Promise((res, rej) => {
      this.setState({ isLoading: true });
      handleSaveQuestion(option1, option2, loggedUser);
      setTimeout(() => res("success"), 1000);
    }).then(() => {
      this.setState({
        option1: "",
        option2: "",
      });
      this.setState({ validSubmit: true });
    });
  };
  render() {
    const disabled = this.state.option1 === "" || this.state.option2 === "";
    if (this.state.validSubmit === true) {
      return <Redirect to="/" />;
    }
    return (
      <Segment.Group>
        <Header as="h3" textAlign="left" block attached="top">
          Create a New Question
        </Header>
        <Grid padded>
          <Grid.Column>
            {this.state.isLoading && (
              <Dimmer active inverted>
                <Loader content="Updating" />
              </Dimmer>
            )}
            <p>Complete the question:</p>
            <p>
              <b>Would you rather...</b>
            </p>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                id="option1"
                placeholder="Enter Option One Text Here"
                value={this.state.option1}
                onChange={this.handleChange}
                required
              />
              <Divider horizontal>Or</Divider>
              <Form.Input
                id="option2"
                placeholder="Enter Option Two Text Here"
                value={this.state.option2}
                onChange={this.handleChange}
                required
              />
              <Form.Button positive size="tiny" fluid disabled={disabled}>
                Submit
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment.Group>
    );
  }
}

function mapStateToProps({ loggedUser }) {
  return {
    loggedUser,
  };
}

export default connect(mapStateToProps, { handleSaveQuestion })(NewQuestion);
