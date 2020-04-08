import React, { useContext } from 'react';

import { StoreContext } from '../context/store';
import { numberWithCommas } from '../util/format';

const Balance = () => {
	const context = useContext(StoreContext);
	//	console.log('bal transac => ', context);
	const amounts = context.transaction.map((ei) => ei.amount);
	//	console.log(amounts);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<>
			<h4>Your Balance</h4>
			<h1>₹ {numberWithCommas(total)}</h1>
		</>
	);
};

export default Balance;
