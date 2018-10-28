import React, { Component } from 'react';

class App extends Component {
	state = {name: ''};

	async componentDidMount() {
		let json = await fetch('https://teamboostingapi.now.sh/journey/?format=json').then(res => res.json());
		console.log(json);
		let name = json[0].journey_name;
		this.setState({name:name});
	}
	render() {
		return (<h2>{this.state.name}</h2>);
	}
}

export default App;
