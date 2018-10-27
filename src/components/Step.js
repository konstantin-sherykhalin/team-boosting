import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class App extends Component {
	state = {
		name: 'Загрузка подождите...',
		values: ['Цель 1'],
	};

	async componentDidMount() {
		console.log(this.props);
		let params = this.props.match.params;
		let json = await fetch('https://teamboostingapiv2.now.sh/journey/'+params.journey_id+'/step/'+params.step_id+'/?format=json').then(res => res.json());
		console.log(json);
		this.setState({
			name: 'Наши '+json.step_name,
			text: json.step_text,
			values: json.questions.map(e => e.question),
		});
	}

	newvalue = () => {
		let values = this.state.values;
		values.push('Ценность '+(values.length+1));
		this.setState({values})
	}

	render() {
		return (
			<div className="App">
				<div className="header">
					<div className="Journeys"><Link to="/">Journeys</Link></div><br/>
				</div>
				<div className="text">{this.state.name}</div>
				<div className="box" dangerouslySetInnerHTML={{__html: 'Очень важно договориться о ценностях и придерживаться их '}} />
				<div className="container">
					{this.state.values.map((e,i) => (<div key={i} className="value">{e}</div>))}
					<div onClick={this.newvalue} className="addvalue">+</div>
				</div>
			</div>
		);
	}
}
