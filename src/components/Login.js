import React, { Component, Fragment } from "react";
import { Header, Segment, Grid, Image, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { setLoggedUser } from "../actions/loggedUser";

class Login extends Component {
  render() {
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
                <Image src="/images/avatars/avatars.png" centered />
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
                <ConnectedLoginForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </Fragment>
    );
  }
}

class LoginForm extends Component {
  state = {
    value: "",
  };

  onChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { setLoggedUser } = this.props;
    const loggedUser = this.state.value;

    setLoggedUser(loggedUser);
  };

  userDropdownData = () => {
    const { users } = this.props;

    return users.map((user) => ({
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
        <Form.Button content="Sign In" positive fluid disabled={disabled} />
      </Form>
    );
  }
}

const ConnectedLoginForm = connect(mapStateToProps, { setLoggedUser })(
  LoginForm
);

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default Login;
