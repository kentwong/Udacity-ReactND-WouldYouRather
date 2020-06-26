import React, { Component, Fragment } from "react";
import { withRouter, NavLink } from "react-router-dom";
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container,
} from "semantic-ui-react";

export default class NavBar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.onLogout();
  };

  render() {
    return (
      <Container>
        <Responsive as={Menu} minWidth={601} pointing secondary>
          <Menu.Item name="home" as={NavLink} to="/" exact />
          <Menu.Item name="new question" as={NavLink} to="/add" />
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                Hello, Kent Wong
                <Image
                  src="images/avatars/gent2.png"
                  avatar
                  spaced="left"
                  verticalAlign="bottom"
                />
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                labelPosition="right"
                basic
                icon="log out"
                onClick={this.handleLogout}
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>

        <Responsive as={Fragment} maxWidth={600}>
          <Grid padded="vertically">
            <Grid.Row>
              <Grid.Column>
                <Image
                  src="images/avatars/gent2.png"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                Hello, Kent Wong
                <Button
                  content="Logout"
                  labelPosition="right"
                  basic
                  compact
                  icon="log out"
                  size="tiny"
                  floated="right"
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Menu pointing secondary widths={3}>
                <Menu.Item name="home" as={NavLink} to="/" exact />
                <Menu.Item name="new question" as={NavLink} to="/add" />
                <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
              </Menu>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  }
}
