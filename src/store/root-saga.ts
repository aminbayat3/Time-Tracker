import { all, call } from 'typed-redux-saga/macro';


export function* rootSaga() {
    yield;
}

// yield* all([call(categoriesSaga), call(userSagas)]);