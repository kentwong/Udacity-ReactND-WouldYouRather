import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { Header, Segment, Grid, Image, Form } from "semantic-ui-react";
import { users } from "./_data";

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  onChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.value);
  };

  userDropdownData = () => {
    return Object.values(users).map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  render() {
    const { value } = this.state;
    const disabled = value === "" ? true : false;
    return (
      <Fragment>
        <Segment.Group>
          <Header as="h4" block attached="top" textAlign="center">
            <Header.Content>
              Welcome to the Would You Rather App!
            </Header.Content>
            <Header.Subheader>Please sign in to continue</Header.Subheader>
          </Header>
          <Grid padded textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Image src="/images/avatars/avatars.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2" color="green">
                  Sign In
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Dropdown
                    placeholder="Select User"
                    fluid
                    selection
                    scrolling
                    options={this.userDropdownData()}
                    value={value}
                    onChange={this.onChange}
                    required
                  />
                  <Form.Button
                    content="Sign In"
                    positive
                    fluid
                    disabled={disabled}
                  />
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </Fragment>
    );
  }
}

export default Login;
