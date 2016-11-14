import React                    from "react";
import { renderToString }       from "react-dom/server";
import { RouterContext, match } from "react-router";
import { Provider }             from "react-redux";

import routes                   from "src/common/routes";
import configureStore           from "src/common/store/configureStore";
import Html                     from "src/common/components/Html";
import { setToken }             from "src/common/actions/HomeAction";

export default function reduxAppMiddleware(req, res, next) {
  // react-router による match
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    } else if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (! renderProps) {
      next();
    } else {
      const store = configureStore({});

      // Route 内に定義している Action を実行する
      Promise.all(
        renderProps.routes
          .filter(route => typeof route.action === "function")
          .map(({ action }) => store.dispatch(action(req.params)))
      )
        .then(() => store.dispatch(setToken(req.csrfToken())))
        .then(() => {
          // フロントエンドに渡す state を文字列化する。
          const state = `window.data=${JSON.stringify(store.getState())}`;

          const markup = renderToString(
            <Provider store={store}>
              <RouterContext { ...renderProps } />
            </Provider>
          );

          const html = renderToString(
            <Html markup={markup} state={state} />
          );

          res.status(200).send(`<!DOCTYPE html>${html}`);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send(err.message);
        });
    }
  });
}
