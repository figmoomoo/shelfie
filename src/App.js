import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Routes from './routes';

class App extends Component{
    render(){
    return(
      <div>
        <Header />
        <div className="main-portion">
          <Routes />
        </div>
      </div>
    )
  }
}

export default App;
