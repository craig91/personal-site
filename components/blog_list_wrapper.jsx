import React from 'react';
import BlogList from './blog_list.jsx';
import SideBar from './side_bar.jsx';

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
          <li>Projects</li>
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
