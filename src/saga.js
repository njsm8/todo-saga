import { put, takeEvery, all, call } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log("Hello Sagas!");
}

export function* changeTextAsync() {
  yield call(console.log, "Saga is running");
  yield put({ type: "ADD_TODO" });
}

export function* watchChangeTextAsync() {
  yield takeEvery("ADD_TODO", changeTextAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchChangeTextAsync()]);
}
