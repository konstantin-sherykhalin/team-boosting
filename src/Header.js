import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Button} from 'antd';

export default () => (
	<div className="Header">
		<Link to='/'><Button type="primary">Journey</Button></Link>
		<Link to='/'><Button type="primary">Calendar</Button></Link>
	</div>
);
