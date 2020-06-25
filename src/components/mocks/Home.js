import React, { Component } from "react";
import NavBar from "./NavBar";
import Tabs from "./Tabs";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Tabs />
      </div>
    );
  }
}

export default Home;
