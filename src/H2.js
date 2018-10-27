import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {Row,Col} from 'antd';
class App extends Component {
	constructor(props) {
		super(props);
		this.state={name: ''}
	}
	async componentDidMount() {
		let zapros= await fetch('https://teamboostingapi.now.sh/journey/?format=json');
		let json = await zapros.json();
		console.log(json);
		let name = json[0].journey_name;
		this.setState({name:name});
	}
  render() {
    return (
      <div>
		  <h2 style={{marginLeft: '10px'}}>{this.state.name}</h2>
      </div>
    );
  }
}

export default App;
