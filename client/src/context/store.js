import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import StoreReducer from './storeReducer';

//Global State
const initState = {
	transactions: [],
	error: null,
	loading: true,
};

//create store Context
export const StoreContext = createContext(initState);

//create store Provider
export const StoreProvider = (props) => {
	const [state, dispatch] = useReducer(StoreReducer, initState);
	console.log('state in StoreProvider => ', state);

	//get transactions action
	async function getTransac() {
		console.log('Action get called');
		try {
			const resp = await axios.get('/trnx');
			dispatch({
				type: 'GET_TRNX',
				payload: resp.data.data,
			});
		} catch (err) {
			console.log('get err in store => ', err.response);
			dispatch({
				type: 'ERR',
				payload: err.response.data.message,
			});
		}
	}

	//del Action
	async function delTransac(id) {
		console.log('Action del called => ', id);
		try {
			await axios.delete(`/trnx/del/${id}`);
			dispatch({
				type: 'DELETE',
				payload: id,
			});
		} catch (err) {
			console.log('del err in store => ', err.response);
			dispatch({
				type: 'ERR',
				payload: err.response.data.message,
			});
		}

		dispatch({ type: 'DELETE', payload: id });
	}

	//add Action
	async function addTransac(data) {
		console.log('Action add called => ', data);
		try {
			const resp = await axios.post('/trnx/add', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			dispatch({
				type: 'ADD',
				payload: resp.data.data,
			});
		} catch (err) {
			console.log('del err in store => ', err.response);
			dispatch({
				type: 'ERR',
				payload: err.response.data.message,
			});
		}
	}

	return (
		<StoreContext.Provider
			value={{
				transaction: state.transactions,
				error: state.error,
				loading: state.loading,
				delTransac,
				addTransac,
				getTransac,
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};
