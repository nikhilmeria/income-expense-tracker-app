import React, { useContext } from 'react';

import { StoreContext } from '../context/store';
import { numberWithCommas } from '../util/format';

const IncomeExp = () => {
	const context = useContext(StoreContext);
	//	console.log('IncomeExp transac => ', context);
	const amounts = context.transaction.map((ei) => ei.amount);
	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	const expense = (
		amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
		-1
	).toFixed(2);

	return (
		<>
			<div className="inc-exp-container">
				<div>
					<h4>Income</h4>

					<p className="money plus">+₹ {numberWithCommas(income)}</p>
				</div>

				<div>
					<h4>Expense</h4>

					<p className="money minus">-₹ {numberWithCommas(expense)}</p>
				</div>
			</div>
		</>
	);
};

export default IncomeExp;
