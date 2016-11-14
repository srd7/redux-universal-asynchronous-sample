var path    = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-hot-middleware/client",
    path.resolve(process.cwd(), "src", "entry", "client.js"),
  ],
  resolve: {
    moduleDirectories: ["node_modules"],
    extensions       : ["", ".js", ".jsx"],
    alias            : {
      "src": path.resolve(process.cwd(), "src"),
    },
  },
  output: {
    path      : path.resolve(process.cwd(), "dist"),
    filename  : "application.js",
    publicPath: "/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "BROWSER": JSON.stringify(true),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        query  : {
          plugins: ["transform-decorators-legacy"],
          presets: ["react-hmre"],
        },
      },
    ],
  },
  status: false,
  devtool: "#source-map",
};
