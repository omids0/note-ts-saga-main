import { all } from "redux-saga/effects";
import { rootSaga as notesSaga } from "./sagas";

function* rootSaga() {
  yield all([notesSaga()]);
}

export default rootSaga;
