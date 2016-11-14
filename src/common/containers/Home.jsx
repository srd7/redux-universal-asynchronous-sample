import React, { Component, PropTypes } from "react";
import { Link }                        from "react-router";

export default class Home extends Component {
  static propTyeps = {

  };

  render() {
    return (
      <Link to="/counter">counter</Link>
    );
  }
}
