import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'antd/es/grid/style/index.js'

class App extends Component {
	state = {
		values: [1, 2, 3],
	};
	
	newvalue = () => {
		let values = this.state.values;
		values.push(1)
		this.setState({values})
	}
	
	
  render() {
    return (
      <div className="App">
		<div className="header">
			<div className="Journeys">Journeys</div><br/>
		</div>
		<div className="text">Team vision: Core Values</div>
		<div className="box"></div>
		<div className="container">
			{this.state.values.map((e,i) => (<div key={i} className="value">{e}</div>))}
			<div onClick={this.newvalue} className="addvalue"></div>
		</div>
      </div>
    );
  }
}

export default App;
