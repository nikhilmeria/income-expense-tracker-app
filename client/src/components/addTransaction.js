import React, { useState, useContext } from 'react';

import { StoreContext } from '../context/store';

const AddTransaction = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const context = useContext(StoreContext);

	//console.log(' AddTransaction props => ', props);
	console.log(' AddTransaction context => ', context);

	const hanldeAddTransaction = (e) => {
		e.preventDefault();
		context.addTransac({
			title,
			amount: props.btnValue === 2 ? -parseInt(amount) : parseInt(amount),
		});
		props.modal(); // to close the modal
	};

	return (
		<>
			<h3>Add new transaction</h3>

			<form onSubmit={hanldeAddTransaction}>
				<div className="form-control">
					<label htmlFor="text">Title</label>

					<input
						type="text"
						placeholder="Enter Title..."
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className="form-control">
					<label htmlFor="amount">Amount</label>

					<input
						type="number"
						placeholder="Enter Amount..."
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
				<button className="btn" onClick={props.modal}>
					Close
				</button>
			</form>
		</>
	);
};

export default AddTransaction;
