import React, { Component, Fragment } from "react";
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container,
} from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Responsive as={Menu} minWidth={601} pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="new question"
            active={activeItem === "new question"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="leader board"
            active={activeItem === "leader board"}
            onClick={this.handleItemClick}
          />

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
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Menu pointing secondary widths={3}>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="new question"
                  active={activeItem === "new question"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="leader board"
                  active={activeItem === "leader board"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  }
}
