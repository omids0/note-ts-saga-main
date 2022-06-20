import { all, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  createNoteItemActionRequest,
  getNoteListActionSuccess,
  removeNoteItemActionRequest,
  removeNoteItemActionSuccess
} from "../actions/notes";
import ActionTypeEnum from "../types";
// import * as actions from "../actions/notes";
// import { noteData } from "../../data/manualNotesData";
// import { getDataList } from "../reducers/notes";

// // //Watcher
// // function* watchLoadNotes() {
// //   yield takeEvery(ActionTypeEnum.NOTE_GET_SUCCESS, loadNotes);
// // }

// // function* watchAddNotes() {
// //   yield takeEvery(ActionTypeEnum.ADD_NOTE, addNote);
// // }

// //Worker
// function* loadNotes() {
//   yield put(actions.notesLoadedAction({ data: noteData }));
// }

// function* addNote({ payload }: ReturnType<typeof actions.notesAddAction>) {

//   console.log("bbbbbbbbbbbbbaaaaaaaaaa" , payload);

//   // yield put(actions.notesAddAction(payload));
//   // try {
//   //   //@ts-ignore
//   //   const getDataList = yield select(getDataList);
//   //   yield put(actions.notesLoadedAction({ data: [...getDataList, payload] }));
//   // } catch (error) {}
// }

// //notes saga
// //watcher
// export function* notesSaga() {
//   // yield all([
//   //   takeEvery(ActionTypeEnum.ADD_NOTE, addNote),
//   //   takeEvery(ActionTypeEnum.NOTE_GET_SUCCESS, loadNotes),
//   // ]);
//   yield takeEvery(ActionTypeEnum.ADD_NOTE, addNote),
//   yield takeEvery(ActionTypeEnum.NOTE_GET_SUCCESS, loadNotes)
// }








function* createNoteSagaAction({
  payload,
}: ReturnType<typeof createNoteItemActionRequest>) {
  try {
    yield put(getNoteListActionSuccess(payload));
  } catch (error: any) {
    console.log("createNoteSagaAction", error);
  }
}

function* removeNoteSagaAction({payload}: ReturnType<typeof removeNoteItemActionRequest>){
  try {
    yield put(removeNoteItemActionSuccess(payload))
  } catch (error) {
    console.log("removeNoteItemAction", error);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(ActionTypeEnum.NOTE_CREATE_REQUEST, createNoteSagaAction),
    takeEvery(ActionTypeEnum.NOTE_REMOVE_REQUEST, removeNoteSagaAction)
  ]);
}
