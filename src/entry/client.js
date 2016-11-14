import React                      from "react";
import { render }                 from "react-dom";
import { Provider }               from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore }   from "react-router-redux";

import routes                     from "src/common/routes";
import configureStore             from "src/common/store/configureStore";

const preloadedState = window.data;
const store = configureStore(preloadedState);
const history = syncHistoryWithStore(browserHistory, store);


render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("app"),
);
