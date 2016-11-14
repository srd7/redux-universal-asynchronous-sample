import React, { Component, PropTypes } from "react";

export default class Html extends Component {
  static propTypes = {
    markup           : PropTypes.node.isRequired,
    state            : PropTypes.string.isRequired,
  };

  render() {
    const { markup, state } = this.props;

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Redux universal asynchronous sample</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: markup }} />
          <script dangerouslySetInnerHTML={{ __html: state }} />
          <script src="/application.js" defer />
        </body>
      </html>
    );
  }
}
