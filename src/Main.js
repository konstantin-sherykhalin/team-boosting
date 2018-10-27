import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {Row,Col} from 'antd';
import Header from './Header';
import H2 from './H2';
import CheckBoxes from './CheckBoxes';
import Image from './Image';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Step from './Step';
class App extends Component {
	constructor(props) {
		super(props);
		this.state={name: 'la'}
	}
	
  render() {
	console.log(this.state.name);
    return (
      <div>
		  <Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/step_name/:number' component={Step}/>
		  </Switch>
	  </div>
    );
  }
}

export default App;
