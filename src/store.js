import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createReducer from './reducers';

export default function configureStore(history, initialState = {}) {
	const sagaMiddleware = createSagaMiddleware();
	const enhancers = [applyMiddleware(sagaMiddleware, createRouterMiddleware(history))];

	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
	/* eslint-disable no-underscore-dangle */
	const composeEnhancers =
		process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: compose;
	/* eslint-enable */

	const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

	sagaMiddleware.run(rootSaga);

	return store;
}
