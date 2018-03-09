import { fork } from 'redux-saga/effects';

function* testSaga() {
	yield setTimeout(() => {
		console.log('test saga');
	}, 500);
}

export default function* rootSaga() {
	return yield [fork(testSaga)];
}
