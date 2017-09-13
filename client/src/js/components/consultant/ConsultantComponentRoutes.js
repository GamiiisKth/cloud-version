import React from 'react';
import {} from 'react-router-dom';
import ConsultantNav from './ConsultantNav';
import InfoView from './component/info/InfoView';
import Test from './component/Test';
import Dashboard from './../dashboard/Dashboard';
import Logout from './../../containers/authentication/Logout';
import { Switch, Redirect, Route, Router } from 'react-router-dom';

module.exports = (
	<Switch>
		<Route path="/logout" name="Logout" component={Logout} />
		<Route path="/dashboard" name="Dashboard" component={Dashboard} />
		<Route path="/consultant" name="Consultant" component={ConsultantNav}>
			<Route path="/consultant/info" name="Info" component={InfoView} />
			<Route path="/consultant/podetails" name="podetajles" component={Test} />
			<Route path="/consultant/podetails" name="rfs" component={InfoView} />
			<Route path="/consultant/podetails" name="rr" component={InfoView} />
			<Route path="/consultant/podetails" name="onoffboard" component={InfoView} />
			<Route path="/consultant/podetails" name="workpremit" component={InfoView} />
		</Route>
		<Redirect exact from="/" to="/dashboard" />
	</Switch>
);
