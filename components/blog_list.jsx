import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import BlogPage from './blog_page.jsx';
var Markdown = require('react-markdown');

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }
  componentDidMount() {
    $.ajax({url: '/api/blogs', type: 'GET'}).done((data) => {
      console.log(data)
      this.setState({blogs: data})
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.blogs.length === 0
            ? "Loading.."
            : this.state.blogs.map(function(val, idx) {
              return (
                <ol key={idx} className="posts">
                  <li>
                    <Link to={"/blogs/" + val.id} className="post-title" href="">{val.title}</Link>
                    <Markdown className="descript" source={val.shortDescript} />
                    <span className="date">
                      Date Posted: May 8th, 2017</span>
                  </li>
                </ol>
              )
            })}

        </div>
      </div>
    )
  }
}

export default BlogList;
