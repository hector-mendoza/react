import React, { Component } from 'react';
import { render } from 'react-dom';
import Contador from './Contador';
import './index.css';

// class Formulario extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       pass: ''
//     }
//   }

//   // syncEmailChanges(email) {
//   //   this.setState({
//   //     email: email
//   //   })
//   // }
//   // syncPassChanges(pass) {
//   //   this.setState({
//   //     pass: pass
//   //   })
//   // }

//   syncChanges(value, property) {
//     let state = {};
//     state[property] = value;
//     this.setState();
//   }

//   submitForm() {
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <form>
//         <input
//           onChange={
//             (ev) => {
//               this.syncChanges((ev.target.value, 'email'))
//             }}
//           type="email" value={this.state.email} placeholder='email' />
//         <input
//           onChange={
//             (ev) => {
//               this.syncChanges((ev.target.value, 'pass'))
//             }}
//           type="password" value={this.state.pass} placeholder='pass' />
//         <div>
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               this.submitForm()
//             }}
//             type="submit">submit</button>
//         </div>

//       </form>
//     )
//   }
// }

// class Blog extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [
//         'articulo 1',
//         'articulo 2',
//         'articulo 3'
//       ]
//     }
//   }

//   render() {
//     return (
//       <div>
//         {
//           this.state.articles.map((title) => {
//             return <p> {title} </p>
//           })
//         }
//       </div>
//     )
//   }
// }

class Blog extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   articles: [
    //     'articulo 1',
    //     'articulo 2',
    //     'articulo 3'
    //   ]
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    // when it gets content
    const getContent = fetch('https://jsonplaceholder.typicode.com/posts');

    // getContent.then((res) => {
    //   res.json().then((data) => {
    //     console.log(data);
    //   });
    // })
    getContent.then(res => res.json()).then(data => {
      this.setState({
        articles: data
      });
    })
  }

  render() {
    return (
      <div>
        {
          this.state.articles.map((article) => {
            return <div className='card' style={{
              textAlign: 'center'
            }} >
              <p>
                {article.title}
              </p>
            </div>
          })
        }
      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <Contador />
    )
  }
}

render(<App />, document.getElementById('root'));
