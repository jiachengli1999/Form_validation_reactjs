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
    })
    this.handleChange = this.handleChange.bind(this)
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
      </div>
    );
  }
}


export default App

