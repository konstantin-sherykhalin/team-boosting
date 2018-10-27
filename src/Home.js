import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {Row,Col} from 'antd';
import Header from './Header';
import H2 from './H2';
import CheckBoxes from './CheckBoxes';
import Image from './Image';
class App extends Component {
	constructor(props) {
		super(props);
		this.state={name: 'la'}
	}
	
  render() {
	console.log(this.state.name);
    return (
      <div>
			<H2/>
			<div className="Main">
				<CheckBoxes/>
				<Image/>
			</div>
	  </div>
    );
  }
}

export default App;
