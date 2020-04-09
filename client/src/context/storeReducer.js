export default (state, action) => {
	//	console.log('storeReducer state => ', state);
	//	console.log('storeReducer action => ', action);
	switch (action.type) {
		case 'GET_TRNX':
			//	console.log('Reducer get called');
			return {
				...state,
				transactions: action.payload,
				loading: false,
			};
		case 'DELETE':
			//	console.log('Reducer del called');
			return {
				...state,
				transactions: state.transactions.filter((ei) => ei._id !== action.payload),
			};
		case 'ADD':
			//	console.log('Reducer add called');
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			};
		case 'ERR':
			//	console.log('Reducer error called');
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
