import { all } from "redux-saga/effects";
import { notesSaga } from "./notesSaga";

function* rootSaga() {
  yield all([notesSaga()]);
}

export default rootSaga;
