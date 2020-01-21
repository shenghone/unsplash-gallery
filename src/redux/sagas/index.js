import { all } from "redux-saga/effects";
import dataSaga from "./dataSaga";
import searchResultSaga from "./searchResultSaga";

export default function* rootSaga() {
  yield all([dataSaga(), searchResultSaga()]);
}
