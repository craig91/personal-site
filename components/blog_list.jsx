import React from 'react';
import $ from 'jquery';


class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }
  componentDidMount() {
    $.ajax({
      url: '/api/blogs',
      type: 'GET'
    }).done((data) => {
      console.log(data)
      this.setState({ blogs: data })
    })
  }
  render() {
    return (
      <div>{this.state.blogs.length === 0 ? "Loading.." : this.state.blogs.map(function(val, idx) {
        return(
            <ol key={idx} className="posts">
              <li>
                <a className="post-title" href="">{val.title}</a>
                <div className="descript">{val.shortDescript}
                </div>
                <span className="date">
                  Date Posted: May 8th, 2017</span>
              </li>
            </ol>
        )
      })}

      </div>
    )
  }
}

export default BlogList;
