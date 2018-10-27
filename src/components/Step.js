import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class App extends Component {
	state = {
		name: 'Загрузка подождите...',
		values: ['Цель 1'],
	};

	async componentDidMount() {
		let json = await fetch('https://teamboostingapi.now.sh/journey/?format=json').then(res => res.json());
		let name = json[0].journey_description;
		this.setState({name:name});
	}

	newvalue = () => {
		let values = this.state.values;
		values.push('Цель '+(values.length+1));
		this.setState({values})
	}

	render() {
		return (
			<div className="App">
				<div className="header">
					<div className="Journeys"><Link to="/">Journeys</Link></div><br/>
				</div>
				<div className="text">Team vision: Core Values</div>
				<div className="box" dangerouslySetInnerHTML={{__html: this.state.name}} />
				<div className="container">
					{this.state.values.map((e,i) => (<div key={i} className="value">{e}</div>))}
					<div onClick={this.newvalue} className="addvalue">+</div>
				</div>
			</div>
		);
	}
}
