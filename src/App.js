import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './store';
import MainRouter from './containers/MainRouter';

const store = createStore(browserHistory);
const syncedHistory = syncHistoryWithStore(browserHistory, store);

const App = () => (
	<Provider store={store}>
		<MainRouter onUpdate={() => window.scrollTo(0, 0)} history={syncedHistory} store={store} />
	</Provider>
);

export default App;
