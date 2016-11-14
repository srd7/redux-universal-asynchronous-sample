import { createStore, applyMiddleware } from "redux";
import thunkMiddleware                  from "redux-thunk";
import { browserHistory }               from "redux-router";
import { routerMiddleware }             from "react-router-redux";

import rootReducer                      from "src/common/reducers/rootReducer";
import dataFetchMiddleware              from "src/common/store/dataFetchMiddleware";

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      // Action を非同期にするのに必要
      thunkMiddleware,
      // フロントでのページ遷移時に情報を取得しに行く
      dataFetchMiddleware,
      routerMiddleware(browserHistory),
    )
  );

  if (module.hot) {
    module.hot.accept("src/common/reducers/rootReducer", () => {
      const nextRootReducer = require("src/common/reducers/rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
