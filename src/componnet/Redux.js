import { createStore } from 'redux';
import { stat } from 'fs';
import * as Reducs from './Reducx-TEst';
const intial = {
	counter: 0
};

const reducer = (state = intial, action) => {
	if (action.type === 'INCRIMENT') {
		return {
			...stat,
			counter: state.counter + 1
		};
	}
	if (action.type === 'DECERIMENT') {
		return {
			...stat,
			counter: state.counter - 1
		};
	}
	return state;
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(Reducs.InAction());
console.log(store.getState());

store.dispatch(Reducs.DecAction());
console.log(store.getState());
