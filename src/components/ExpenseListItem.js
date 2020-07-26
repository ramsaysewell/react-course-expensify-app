import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import localeData from 'numeral/locales/en-gb';

numeral.locale('en-gb');

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')} -
			{moment(createdAt).format('Do MMMM, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;
