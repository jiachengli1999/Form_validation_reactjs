import React, { Component } from 'react'
import './App.css'
import AppForm from './AppForm.js'

class App extends Component{
  constructor(){
    super()
    this.state = ({
      firstName: "",
      lastName: "",
      Gender: "",
      Age: "",
      todos: [],
    })
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
      const info = await res.json();
      console.log(info)
      this.setState({
        todos: info
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange(e){
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }

  render(){
    return(
      <div>
        <AppForm handleChange={this.handleChange} {...this.state}/>
        <h1>Backend Data:</h1>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}


export default App

