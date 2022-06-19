import { all, put, takeEvery } from "redux-saga/effects";
import ActionTypeEnum from "../types";
import * as actions from "../actions/notesAction";
import { noteData } from "../../data/manualNotesData";

//Worker
function* loadNotes() {
  yield put(actions.notesLoadedAction(noteData));
}

//Watcher
function* watchLoadNotes() {
  yield takeEvery(ActionTypeEnum.LOAD_NOTES, loadNotes);
}

export function* notesSaga() {
  yield all([watchLoadNotes()]);
}
