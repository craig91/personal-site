import React from 'react';
import BlogList from './blog_list.jsx';
import SideBar from './side_bar.jsx';
import { Link } from 'react-router';

class BlogWrapper extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
  <div>
    <SideBar />
      <main>
        <ul className="menu">
          <li>Blog</li>
          <li><Link to={'/projects'}> Projects </Link> </li>
          <li>Gaming</li>
        </ul>
        <div className="projects title">Blogs</div>
        <BlogList />
      </main>
    </div>
    )
  }
}

export default BlogWrapper;
