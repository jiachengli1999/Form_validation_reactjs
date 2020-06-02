import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css'
import AppForm from './AppForm.js'
import Login from './Login.js'


class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Form" component={AppForm} />
            <Route path="/Login" component={Login} />
            <Route component={Login}/> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App

