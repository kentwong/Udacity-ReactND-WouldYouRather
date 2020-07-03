import React, { Component, Fragment } from "react";
import Home from "./mocks/Home";
import NavBar from "./mocks/NavBar";
import Login from "./mocks/Login";
import NewQuestion from "./mocks/NewQuestion";
import LeaderBoard from "./mocks/LeaderBoard";
import Error404 from "./mocks/Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { questionDetails } from "./mocks/_data";
import PollContainer from "./mocks/PollContainer";
import { handleData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.handleData();
  }

  // state = {
  //   isLoggedIn: false,
  //   showPage: false,
  //   user: "",
  // };

  // handleLogin = (user) => {
  //   this.setState((prevState) => ({
  //     isLoggedIn: !prevState.isLoggedIn,
  //     user,
  //   }));
  // };

  // setPage = (showPage) => {
  //   this.setState({
  //     showPage: showPage,
  //   });
  // };

  render() {
    const { loggedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {loggedUser === !null ? (
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
          ) : (
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
          )}
        </div>
      </Router>
    );
  }
}

// const AppRoutes = (props) => (
//   <Switch>
//     <Route exact path="/" render={() => <Home onSetPage={props.setPage} />} />
//     <Route
//       path="/questions/:question_id"
//       render={() => (
//         <PollContainer {...questionDetails} showPage={props.showPage} />
//       )}
//     />
//     <Route path="/add" component={NewQuestion} />
//     <Route path="/leaderboard" component={LeaderBoard} />
//     <Route component={Error404} />
//   </Switch>
// );

function mapStateToProps({ loggedUser }) {
  return {
    loggedUser,
  };
}
export default connect(mapStateToProps, { handleData })(App);
