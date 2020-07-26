export default (expenses) => {
	return expenses
		.map((expense) => expense.amount)
		.reduce((sum, newVal) => sum + newVal, 0);
};
