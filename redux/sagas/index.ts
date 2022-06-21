import { all, delay, put, takeEvery } from "redux-saga/effects";
import {
  createNoteItemActionRequest,
  getNoteListActionSuccess,
  removeNoteItemActionRequest,
  removeNoteItemActionSuccess,
  updateNoteActionSuccess,
} from "../actions/notes";
import ActionTypeEnum from "../types";
import { updateNoteItemActionRequest } from "./../actions/notes/index";

function* createNoteSagaAction({
  payload,
}: ReturnType<typeof createNoteItemActionRequest>) {
  try {
    yield put(getNoteListActionSuccess(payload));
  } catch (error: any) {
    console.log("createNoteSagaAction", error);
  }
}

function* removeNoteSagaAction({
  payload,
}: ReturnType<typeof removeNoteItemActionRequest>) {
  try {
    yield put(removeNoteItemActionSuccess(payload));
  } catch (error: any) {
    console.log("removeNoteItemAction", error);
  }
}

function* updateNoteSagaAction({
  payload,
  so,
}: ReturnType<typeof updateNoteItemActionRequest>) {
  try {
    yield delay(5000)
    yield put(updateNoteActionSuccess(payload));
    so?.(false)
    // meta?.push('/')
  } catch (error: any) {
    console.log("updateNoteSagaAction", error);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(ActionTypeEnum.NOTE_CREATE_REQUEST, createNoteSagaAction),
    takeEvery(ActionTypeEnum.NOTE_REMOVE_REQUEST, removeNoteSagaAction),
    takeEvery(ActionTypeEnum.NOTE_UPDATE_REQUEST, updateNoteSagaAction),
  ]);
}
