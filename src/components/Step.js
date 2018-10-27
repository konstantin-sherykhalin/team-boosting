import React,{Component} from 'react';

import Ilya from './ilya';

export default class App extends Component {
	state = {name:'Загрузка подождите...'};

	async componentDidMount() {
		let json = await fetch('https://teamboostingapi.now.sh/journey/?format=json').then(res => res.json());
		console.log(json);
		let name = json[0].journey_description;
		this.setState({name:name});
	}
	render() {
		console.log(this.state.name);
		return (
			<div>
				<div style={{margin:'10px'}} dangerouslySetInnerHTML={{__html: this.state.name}} />
				<Ilya/>
			</div>
		);
	}
}
