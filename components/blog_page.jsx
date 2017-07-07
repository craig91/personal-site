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
          <div className="hero-image" style={{ backgroundImage: `url(${this.state.blogs.hero})` }}>
            <div className="hero-text">
              <h1> I am Craig</h1>
              <p>I am a programmer</p>
            </div>          
            
          </div>
                <main className="blog-page-main">
            <h2 className="heading">{this.state.blogs.heading}</h2>
            <p>{this.state.blogs.post}</p>
          </main>

          {/*<div className="content">{this.state.blogs.post}</div>*/}
        </div>
      )
    } else {
      return (
        <div>Loading....</div>
      )
    }
  }
}


    // <header className="gradient" style={{
    //           backgroundImage: `url(${this.state.blogs.hero})`, DivStyle 
    //        }} >
    //         <div className="head">
              
              
    //         </div>
    //       </header>

// <div className="overlay">
// {/*<div className="banner" style={{
//   backgroundImage: `url(${this.state.blogs.hero})`
// }}></div>*/}
// {/*<p className="test">hello world</p>*/}
//  <img src={this.state.blogs.hero} />
//
// </div>

export default BlogPage;
