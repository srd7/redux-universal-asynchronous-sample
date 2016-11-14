import React     from "react";
import { Route } from "react-router";

import Home      from "src/common/containers/Home";
import Counter   from "src/common/containers/Counter";
import {
  initialize as initializeCounter,
}                from "src/common/actions/CounterAction";

// ここで書いてある action は自前であることに注意。
export default (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/counter" component={Counter} action={initializeCounter} />
  </Route>
);
