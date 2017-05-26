import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../css/_sideBar.css';
import '../css/_main.css';

import SideBar from '../components/side_bar.jsx';
import BlogWrapper from '../components/blog_list_wrapper.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SideBar />
        {this.props.children}
      </div>
    )
  }
}



ReactDOM.render (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BlogWrapper} />
      {/* <Route path='/list' component={BlogList} />
      <Route path='/login' component={LoginForm} />
      <Route path='/distros' component={Distros} /> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
