import React from 'react';
import $ from 'jquery';

const DivStyle = {
   backgroundSize: 'cover',
   backgroundColor: 'rgba(0, 0, 0, 0.3)'
}

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
          <header className="gradient" style={{
              backgroundImage: `url(${this.state.blogs.hero})`, DivStyle 
           }} >
            <div className="head">
              
              
            </div>
          </header>

          <main className="blog-page-main">
            <h2 className="heading">Information about Cheese Curds</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis, labore debitis nesciunt ipsam odio corporis architecto reiciendis voluptas ab quibusdam ratione rerum tempore voluptatibus libero cumque dignissimos vero hic!</p>
          </main>

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

// <div className="overlay">
// {/*<div className="banner" style={{
//   backgroundImage: `url(${this.state.blogs.hero})`
// }}></div>*/}
// {/*<p className="test">hello world</p>*/}
//  <img src={this.state.blogs.hero} />
//
// </div>

export default BlogPage;
