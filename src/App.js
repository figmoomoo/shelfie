import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component{
    render(){
    return(
      <div>
        <Header />
        <Dashboard />
        <Form />
      </div>
    )
  }
}

export default App;
