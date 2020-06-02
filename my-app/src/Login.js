import React, { Component } from "react";
import './Login.css'

class Login extends Component{
    constructor(){
        super()
        this.state = ({
            todos: [],
            username: '',
            password: '',
        })
        this.validateForm = this.validateForm.bind(this)
    }

    // async componentDidMount() {
    //     try {
    //       const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
    //       const info = await res.json();
    //       this.setState({
    //         todos: info
    //       });
    //     } catch (e) {
    //       console.log(e);
    //     }
    // }

    
    validateForm(){
        return (this.state.username.length > 0 && this.state.password.length > 0)
    }

    render(){
        console.log(this.validateForm)
        return(
            <div className='Login'>
                {/* {this.state.todos.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <span>{item.description}</span>
                </div>
                ))} */}
                <div className='container'>
                    <label>Username:</label> <br/>
                    <input 
                        name='username'
                        value={this.state.username}
                        onChange={e => this.setState({username: e.target.value})}
                    />
                    <br/>
                    <label>Password:</label> <br/>
                    <input 
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <br/>
                    <button disabled={!(this.state.username.length > 0 && this.state.password.length > 0)} type="submit">
                        Login
                    </button>
                    <button classname='signUp' type="submit">
                        SignUp
                    </button>
                </div>
            </div>
        )
    }
}

 export default Login;