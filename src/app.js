import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleItems from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
	addExpense({ description: 'Water Bill', amount: 1000, createdAt: 2000 })
);
store.dispatch(
	addExpense({ description: 'Gas Bill', amount: 100, createdAt: 2600 })
);
store.dispatch(
	addExpense({ description: 'Rent', amount: 109500, createdAt: 2500 })
);
store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleItems = getVisibleItems(state.expenses, state.filters);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
