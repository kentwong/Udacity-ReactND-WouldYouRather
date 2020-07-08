import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

class Error404 extends Component {
  render() {
    return (
      <Container textAlign="center" padded>
        <Header as="h3">Error 404 - Page Not Found! </Header>
        <p>Please use menu to navigate to the correct page! </p>
      </Container>
    );
  }
}

export default Error404;
