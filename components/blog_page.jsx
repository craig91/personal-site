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
        <main className="blogPost_main" >
           <img src={this.state.blogs.hero}></img>
           <div>{this.state.blogs.post}</div>

        </main>
      )
    } else {
      return (
        <div>Loading....</div>
      )
    }
  }
}


// <div>
//   <div className="blog_banner">
//     <img src={this.state.blogs.hero}></img>
//   </div>
//   <div>{this.state.blogs.post}</div>
//   <div>{}</div>
// </div>

export default BlogPage;
