import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div className = "header">
                <img className="logo" src="https://cdn.discordapp.com/attachments/718455188100350035/746251734703276042/shelfie_logo.png" alt="logo"/>
                <h1>SHELFIE</h1>
                <button onClick={() => {this.props.history.push('/')}}>Dashboard</button>
                <button onClick={() => {this.props.history.push('/new/')}}>Add</button>
            </div>
        )
    }
}

export default withRouter(Header);