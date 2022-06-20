import { INoteDataReqActionType, INoteDataResActionType } from "../../../types/DTO/note";
import ActionTypeEnum from "../../types";

// GET LIST
export const getNoteListActionSuccess = (payload: INoteDataReqActionType['req']) => ({
  type: ActionTypeEnum.NOTE_GET_SUCCESS,
  payload,
});

// CREATE NEW NOTE
export const createNoteItemActionRequest = (
  payload: INoteDataReqActionType['req']
) => ({
  type: ActionTypeEnum.NOTE_CREATE_REQUEST,
  payload,
});

// export const notesAddedAction = (payload: INoteDataReqActionType) => ({
//   type: ActionTypeEnum.NOTE_ADDED,
//   payload,
// });

// for apis
// // for create
// export const noteCreateActionRequest = (payload: any)=> ({ type:"action.note.request" , payload})

// // for update
// export const noteUpdateActionRequest = (payload: any)=> ({ type:"action.note.request" , payload})

// // for delete
// export const noteRemoveActionRequest = (payload: any)=> ({ type:"action.note.request" , payload})

// // for get
// export const noteListActionRequest = (payload: any)=> ({ type:"action.note.request" , payload})
// export const noteListActionSuccess = (payload: any)=> ({ type:"action.note.request" , payload})

type TAction =
  | ReturnType<typeof getNoteListActionSuccess>
  | ReturnType<typeof createNoteItemActionRequest>;

export default TAction;
