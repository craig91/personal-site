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
          <div className="overlay">
          {/*<div className="banner" style={{
            backgroundImage: `url(${this.state.blogs.hero})`
          }}></div>*/}
          {/*<p className="test">hello world</p>*/}
           <img src={this.state.blogs.hero} />
           
          </div>
          <div className="content">{this.state.blogs.post}</div>
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
