import React,{Component} from 'react';

import {Link} from 'react-router-dom';

export default class App extends Component {
	state = {
		checked: true,
		disabled: false,
		name1: '',
		name2: '',
		name3: '',
		name4: '',
		name5: '',
		name: [],
		links: [],
	};

	async componentDidMount() {
		let json = await fetch('https://teamboostingapi.now.sh/journey/?format=json').then(res => res.json());
		let name = json[0].steps; /*массив ссылок*/

		for(let i=0; i<name.length; i++) {
			this.setState({links:[...this.state.links,name[i]]});
		}
		let waiting = [];
		for (let i=0;i<this.state.links.length;i++) {
			waiting.push(
				fetch(this.state.links[i])
					.then(data => data.json())
					.then(json => this.setState({name:[...this.state.name,json.step_name]}))
			);
		}

	}

	onChange = () => this.setState(prev => ({checked:!prev.checked}));

	render() {
		return (
			<div className="Checks">
				{this.state.name.map((elem,i) => <p key={i}><Link to={'/journey/'+this.props.journey_id+'/step/'+(i+1)}>{elem}</Link></p>)}
			</div>
		);
	}
}
