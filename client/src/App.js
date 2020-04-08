import React from 'react';

import Header from './components/header';
import Balance from './components/balance';
import IncomeExp from './components/incomeExp';
import TransactionList from './components/transactionList';
import AddModal from './components/modal';
import { StoreProvider } from './context/store';
import './App.css';

function App() {
	return (
		<StoreProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExp />
				<TransactionList />
				<AddModal />
			</div>
		</StoreProvider>
	);
}

export default App;
