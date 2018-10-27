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
		this.state={name: 'Загрузка подождите...'}
		console.log(this.props.match.params.number);
	}
	async componentDidMount() {
		let zapros= await fetch('https://teamboostingapi.now.sh/journey/?format=json');
		let json = await zapros.json();
		console.log(json);
		let name = json[0].journey_description;
		//alert(name);
		this.setState({name:name});
	}
  render() {
	console.log(this.state.name);
    return (
      <div style={{margin: '10px'}} dangerouslySetInnerHTML={{__html: this.state.name}}/>
    );
  }
}

export default App;
