import express              from "express";
import session              from "express-session";
import cookieParser         from "cookie-parser";
import csrf                 from "csurf";
import bodyParser           from "body-parser";

import webpack              from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import sessionConfig        from "src/session.config";
import webpackConfig        from "src/webpack.config";

const libraryMiddleware = express();

// CSRF トークン設定
// csurf には cookie と session の設定も必要なので
// そちらから行う
libraryMiddleware.use(session(sessionConfig));
libraryMiddleware.use(cookieParser());
libraryMiddleware.use(csrf({ cookie: true }));
// Fetchr で body-parser が必要
libraryMiddleware.use(bodyParser.json());

// WebpackDevServer 設定
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig);
  libraryMiddleware.use(webpackDevMiddleware(compiler, {
    noInfo    : true,
    publicPath: webpackConfig.output.publicPath,
  }));
  libraryMiddleware.use(webpackHotMiddleware(compiler));
}

export default libraryMiddleware;
