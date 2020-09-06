import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import { createBrowserHistory } from 'history';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<Route path="/dashboard" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} exact={true} />
				<Route
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
