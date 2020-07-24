import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id is not found', () => {
	const action = { type: 'REMOVE_EXPENSE', id: '-1' };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const newExpense = {
		id: '109',
		description: 'new laptop',
		note: '',
		amount: 29500,
		createdAt: 100,
	};

	const action = { type: 'ADD_EXPENSE', expense: newExpense };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			description: 'Rent Bill',
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].description).toBe('Rent Bill');
});

test('should not edit an expense if id not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '123',
		updates: {
			description: 'Rent Bill',
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
