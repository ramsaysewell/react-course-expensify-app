import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import { createBrowserHistory } from 'history'
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
				<PrivateRoute path="/create" component={AddExpensePage} exact={true} />
				<PrivateRoute
					path="/edit/:id"
					component={EditExpensePage}
					exact={true}
				/>
				<Route path="/help" component={HelpPage} exact={true} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);
export default AppRouter;
