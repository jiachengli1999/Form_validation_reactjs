import React, { Component } from "react";

class Login extends Component{
    constructor(){
        super()
        this.state = ({
            todos: [],
        })
    }

    async componentDidMount() {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
          const info = await res.json();
          this.setState({
            todos: info
          });
        } catch (e) {
          console.log(e);
        }
    }

    render(){
        return(
            <div>
                {this.state.todos.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <span>{item.description}</span>
                </div>
                ))}
            </div>
        )
    }
}

 export default Login;