import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0,
}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});

const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

const setStartDate = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate,
});

const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate,
});

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount',
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date',
			};
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text,
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate,
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate,
			};
		default:
			return state;
	}
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch =
				typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: 'Rent', amount: 10000, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
	addExpense({ description: 'Coffee', amount: 20000, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 30000}));

// store.dispatch(setTextFilter('red'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125)); // startDate: 125
// store.dispatch(setStartDate()); // startDate: undefined

// store.dispatch(setEndDate(999)); // startDate: 1250

const demoState = {
	expenses: [
		{
			id: 'asdasdasd',
			description: 'April Rent',
			note: 'Rent payment for April',
			amount: 37500,
			createdAt: 0,
		},
	],
	filters: {
		text: 'rent',
		sort: 'date', // date or amount
		startDate: undefined,
		endDate: undefined,
	},
};
