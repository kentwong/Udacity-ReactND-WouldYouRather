import React, { Component, Fragment } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Error404 from "./Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { questionDetails } from "./_data";
import PollContainer from "./PollContainer";

class App extends Component {
  state = {
    isLoggedIn: false,
    showPage: false,
    user: "",
  };

  handleLogin = (user) => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
      user,
    }));
  };

  setPage = (showPage) => {
    this.setState({
      showPage: showPage,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.isLoggedIn === true ? (
            <Fragment>
              <NavBar onLogout={this.handleLogin} user={this.state.user} />
              <Grid padded centered>
                <Grid.Row>
                  <Grid.Column style={{ maxWidth: 600 }}>
                    <AppRoutes
                      setPage={this.setPage}
                      showPage={this.state.showPage}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Fragment>
          ) : (
            <Route
              render={() => (
                <Grid padded centered>
                  <Grid.Row>
                    <Grid.Column style={{ maxWidth: 600 }}>
                      <Login onLogin={this.handleLogin} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )}
            />
          )}
        </div>
      </Router>
    );
  }
}

const AppRoutes = (props) => (
  <Switch>
    <Route exact path="/" render={() => <Home onSetPage={props.setPage} />} />
    <Route
      path="/questions/:question_id"
      render={() => (
        <PollContainer {...questionDetails} showPage={props.showPage} />
      )}
    />
    <Route path="/add" component={NewQuestion} />
    <Route path="/leaderboard" component={LeaderBoard} />
    <Route component={Error404} />
  </Switch>
);

export default App;
