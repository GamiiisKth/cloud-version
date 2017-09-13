import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './containers/index/Routes';

const history = createBrowserHistory();

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
{
	/** change  the Router till BrowsRouter**/
}
ReactDom.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Router history={history}>
			<Route path="/" component={Routes} />
		</Router>
	</MuiThemeProvider>,
	document.getElementById('react-app')
);
