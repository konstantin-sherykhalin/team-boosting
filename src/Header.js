import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
class App extends Component {
	constructor(props) {
		super(props);
		this.state={name: ''};
	}

  render() {
    return (
      <div className="Header">
		  <Link to='/'><Button type="primary">Journey</Button></Link>
		  <Link to='/'><Button type="primary">Calendar</Button></Link>
      </div>
    );
  }
}

export default App;
