import React, { Component, PropTypes } from "react";
import { bindActionCreators }          from "redux";
import { connect }                     from "react-redux";
import { Link }                        from "react-router";

import * as CounterAction              from "src/common/actions/CounterAction";

@connect(
  (state) => {
    return { value: state.counter };
  },
  (dispatch) => bindActionCreators(CounterAction, dispatch)
)
export default class Counter extends Component {
  static propTypes = {
    value            : PropTypes.number.isRequired,
    increment        : PropTypes.func.isRequired,
    decrement        : PropTypes.func.isRequired,
  };

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.increment();
    }
  }

  incrementAsync() {
    setTimeout(() => this.props.increment(), 1000);
  }

  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <p>
          Clicked: {value} times
          {" "}
          <button onClick={increment}>
            +
          </button>
          {" "}
          <button onClick={decrement}>
            -
          </button>
          {" "}
          <button onClick={::this.incrementIfOdd}>
            Increment if odd
          </button>
          {" "}
          <button onClick={::this.incrementAsync}>
            Increment async
          </button>
        </p>
      </div>
    );
  }
}
