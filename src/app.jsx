import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}


ReactDOM.render (
  <App />,
  document.getElementById('root')
)
