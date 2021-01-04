import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './RootReducer';

const composeEnhancers = compose;

// Connect our store to the reducers

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
