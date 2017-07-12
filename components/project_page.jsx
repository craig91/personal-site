// import React from 'react';
// import { Link } from 'react-router';

// class ProjectList extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             projects: []
//         };
//     }
//     componentDidMount() {
//         $.ajax({
//             url: '/api/projects',
//             type: 'GET'
//         })
//         .done((data) => {
//             this.setState({projects: data})
//         })
//     }
//     render() {
//         return (
//             <div key={idx}>
//                 <div>{this.state.projects.length === 0 ? "loading.." : this.state.projects.map(function(val, idx) {
//                     return(
//                      <div></div>    
//                     )})}</div>

//             </div>
//         )
//     }
// }

// export default ProjectList;