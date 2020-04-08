import React, { useContext } from 'react';

import { StoreContext } from '../context/store';
import { numberWithCommas } from '../util/format';

const TransactionItem = (props) => {
	const context = useContext(StoreContext);
	//console.log('TransactionItem context => ', context);

	return (
		<li className={props.transacItem.amount >= 0 ? 'plus' : 'minus '}>
			{props.transacItem.title}{' '}
			<span>₹ {numberWithCommas(props.transacItem.amount)}</span>
			<button
				className="delete-btn"
				onClick={() => context.delTransac(props.transacItem._id)}
			>
				x
			</button>
		</li>
	);
};

export default TransactionItem;
