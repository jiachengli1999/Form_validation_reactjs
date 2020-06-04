// import React, { Component } from "react";
// import './Login.css'

// class Login extends Component{
//     constructor(){
//         super()
//         this.state = ({
//             todos: [],
//             username: '',
//             password: '',
//         })
//         this.handleLogin = this.handleLogin.bind(this)
//     }
    
//     handleLogin(e, data){
//         e.preventDefault();
//         fetch('http://127.0.0.1:8000/token-auth/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then(json => {
//             localStorage.setItem('token', json.token);
//             this.props.setState({
//                 logged_in: true,
//                 username: json.user.username
//             });
//         });
//     }

//     render(){
//         return(
//             <div className='Login'>
//                 <form className='container' onSubmit={e => this.handleLogin(e, this.state)}>
//                     <h4>Login</h4>
//                     <label>Username:</label> <br/>
//                     <input 
//                         name='username'
//                         value={this.state.username}
//                         onChange={e => this.setState({username: e.target.value})}
//                     />
//                     <br/>
//                     <label>Password:</label> <br/>
//                     <input 
//                         name='password'
//                         type='password'
//                         value={this.state.password}
//                         onChange={e => this.setState({password: e.target.value})}
//                     />
//                     <br/>
//                     <input type="submit" />
//                 </form>
//             </div>
//         )
//     }
// }

//  export default Login;


import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Login;

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
};