import React from 'react';
import $ from 'jquery';

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: null
    }
  }
  componentDidMount() {
    $.ajax({
      url: '/api/blogs/' + this.props.params.id,
      type: 'GET'
    }).done((data) => {
      console.log(data)
      this.setState({blogs: data})
    })
  }
  render() {
    if (this.state.blogs) {
      let blog = this.state.blogs;
      console.log(blog)
      return (
        <div>
          <div style={{ backgroundImage: `url(${blog.hero})` }}></div>
        </div>
      )
    } else {
      return (
        <div>Loading....</div>
      )
    }
  }
}

export default BlogPage;
