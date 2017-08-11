import { createStore } from 'redux';
import reducer from '../reducers/index.js';

const initialState = { counter: 1 };
const store = createStore(reducer, initialState);
export default store;