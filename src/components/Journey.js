import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header';

import H2 from './H2';
import CheckBoxes from './CheckBoxes';
import Image from './Image';

export default (props) => {
	return (
		<div>
			<div className="header">
				<div className="Journeys"><Link to="/">Journeys</Link></div><br/>
			</div>
			<div className="Main">
				<H2/>
				<CheckBoxes journey_id={props.match.params.journey_id}/>
				{/*<Image/>*/}
			</div>
		</div>
	);
}
