import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import {Checkbox} from 'antd';
import Header from './Header';
import H2 from './H2';
import Checkboxes from './CheckBoxes';
import Image from './Image';
import {Link} from 'react-router-dom';
class App extends Component {
	constructor(props) {
		super(props);
		this.state={checked: true,disabled: false,
		name1: '',
		name2: '',
		name3: '',
		name4: '',
		name5: '',
		name: [],
		links: [],}
	}
	onChange = () => {
		this.setState({checked: !this.state.checked});
	}
	async componentDidMount() {
		let zapros= await fetch('https://teamboostingapi.now.sh/journey/?format=json');
		let json = await zapros.json();
		//console.log(json);
		let name = json[0].steps; /*массив ссылок*/
		
		for (let i=0;i<name.length;i++) {
			this.setState({links: [...this.state.links, name[i]]});
		}
		let waiting = [];
		for (let i=0;i<this.state.links.length;i++) { 
			waiting.push(
				fetch(this.state.links[i])
					.then(data => data.json())
					.then(json => this.setState({name: [...this.state.name, json.step_name]}))
				 /*имена чекбоксов*/
			);
		}
		
	}
  render() {
    return (
      <div className="Checks">
			{this.state.name.map( (elem, i) => <p key={i}><Link to={`/step_name/${i}`}>{elem}</Link></p> )}
	  </div>
    );
  }
}

export default App;
