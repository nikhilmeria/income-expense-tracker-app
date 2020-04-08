import React, { useContext, useEffect } from 'react';

import Spinner from './spinner';
import { StoreContext } from '../context/store';
import TransactionItem from './transactionItem';

const TransactionList = () => {
	const context = useContext(StoreContext);
	//console.log('list transac => ', context.loading);

	useEffect(() => {
		context.getTransac();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h3>Transactions</h3>
			{context.loading === true ? (
				<Spinner />
			) : (
				<ul className="list">
					{context.transaction.length >= 1 ? (
						context.transaction.map((ei) => (
							<TransactionItem transacItem={ei} key={ei._id} />
						))
					) : (
						<p style={{ textAlign: 'center' }}>No transactions to show</p>
					)}
				</ul>
			)}
		</>
	);
};

export default TransactionList;
