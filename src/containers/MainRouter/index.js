import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import LoginPage from '../LoginPage';

const Test = () => <div>!!!</div>;

const MainRouter = props => (
	<Router {...props}>
		<Route path="/" component={Test} />
		<Route path="/login" component={LoginPage} />
	</Router>
);

export default MainRouter;
