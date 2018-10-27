import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Main		from './components/Main';
import Journey	from './components/Journey';
import Step		from './components/Step';

import './App.css';
import './ilya.css';

export default () => (
	<Switch>
		<Route exact path='/' component={Main} />
		<Route exact path='/journey/:journey_id' component={Journey} />
		<Route exact path='/journey/:journey_id/step/:step_id' component={Step} />
	</Switch>
);
