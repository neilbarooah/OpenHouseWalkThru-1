var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var UserProfile = require('UserProfile');
var Dashboard = require('Dashboard');

// Load Foundation
$(document).foundation();

//SCSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path='/userprofile' component={UserProfile}></Route>
			<Route path='/dashboard' component={Dashboard}></Route>
		</Route>
	</Router>,
	document.getElementById('app'));