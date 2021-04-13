// Store/configureStore.js

import { createStore } from 'redux';
import combinedReducers from './combinedreducers';

export default createStore(combinedReducers)