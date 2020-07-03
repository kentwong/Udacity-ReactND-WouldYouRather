import React, { Component, Fragment } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Login from "./Login";
import Error404 from "./Error404";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { handleData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.handleData();
  }

  render() {
    const { loggedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {loggedUser === null ? (
            <Route
              render={() => (
                <Grid padded centered>
                  <Grid.Row>
                    <Grid.Column style={{ maxWidth: 600 }}>
                      <Login />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )}
            />
          ) : (
            <Fragment>
              <NavBar />
              <Grid padded centered>
                <Grid.Row>
                  <Grid.Column style={{ maxWidth: 600 }}>
                    <Route exact path="/" component={Home} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ loggedUser }) {
  return {
    loggedUser,
  };
}
export default connect(mapStateToProps, { handleData })(App);
