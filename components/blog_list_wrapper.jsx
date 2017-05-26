import React from 'react';
import BlogList from './blog_list.jsx';

class BlogWrapper extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <ul className="menu">
          <li>Blog</li>
          <li>Projects</li>
          <li>Gaming</li>
        </ul>
        <div className="projects title">Blogs</div>
        <BlogList />
      </main>
    )
  }
}

export default BlogWrapper;
