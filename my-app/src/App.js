import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css'
import AppForm from './AppForm.js'
import Login from './Login.js'


class App extends Component{

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
        <BrowserRouter>
          <Switch>
            <Route path="/Form" component={AppForm} />
            <Route path="/Login" component={Login} />
          </Switch>
        </BrowserRouter>
        {/* <AppForm handleChange={this.handleChange} {...this.state}/> */}
        {/* <h1>Backend Data:</h1> */}
        {/* {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))} */}
      </div>
    );
  }
}


export default App

