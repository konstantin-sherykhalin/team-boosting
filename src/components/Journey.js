import React, { Component } from 'react';

import H2 from './H2';
import CheckBoxes from './CheckBoxes';
import Image from './Image';

export default (props) => {
	console.log(props);
	return (
	<div>
		<H2/>
		<div className="Main">
			<CheckBoxes journey_id={props.match.params.journey_id}/>
			<Image/>
		</div>
	</div>
);
}
