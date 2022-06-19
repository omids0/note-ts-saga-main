import { all, put, takeEvery } from "redux-saga/effects";
import ActionTypeEnum from "../types";
import * as actions from "../actions/notesAction";
import { noteData } from "../../data/manualNotesData";

//Worker
function* loadNotes() {
  yield put(actions.notesLoadedAction({ data: noteData }));
}

// payload: ReturnType<typeof actions.notesAddedAction>

function* addNote(action: ReturnType<typeof actions.notesAddedAction>) {
  console.log("add note", action.payload);

  yield put(actions.notesAddedAction(action.payload));
}

//Watcher
function* watchLoadNotes() {
  yield takeEvery(ActionTypeEnum.LOAD_NOTES, loadNotes);
}

function* watchAddNotes() {
  yield takeEvery(ActionTypeEnum.ADD_NOTE, addNote);
}

export function* notesSaga() {
  yield all([watchLoadNotes(), watchAddNotes()]);
}
