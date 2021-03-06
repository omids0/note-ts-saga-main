import { INoteDataReqActionType } from "../../../types/DTO/note";
import ActionTypeEnum from "../../types";

// GET LIST
export const getNoteListActionSuccess = (
  payload: INoteDataReqActionType["req"]
) => ({
  type: ActionTypeEnum.NOTE_GET_SUCCESS,
  payload,
});

// CREATE NEW NOTE
export const createNoteItemActionRequest = (
  payload: INoteDataReqActionType["req"]
) => ({
  type: ActionTypeEnum.NOTE_CREATE_REQUEST,
  payload,
});

// REMOVE NOTE FROM LIST
export const removeNoteItemActionRequest = (
  payload: INoteDataReqActionType["req"]
) => ({
  type: ActionTypeEnum.NOTE_REMOVE_REQUEST,
  payload,
});

export const removeNoteItemActionSuccess = (
  payload: INoteDataReqActionType["req"]
) => ({
  type: ActionTypeEnum.NOTE_REMOVE_SUCCESS,
  payload,
});

//UPDATE NOTE REQUEST
export const updateNoteItemActionRequest = (
  payload: INoteDataReqActionType["req"],
  so: React.Dispatch<React.SetStateAction<boolean>>
) => ({
  type: ActionTypeEnum.NOTE_UPDATE_REQUEST,
  payload,
  so,
  // meta
});

export const updateNoteActionSuccess = (
  payload: INoteDataReqActionType["req"]
) => ({
  type: ActionTypeEnum.NOTE_UPDATE_SUCCESS,
  payload,
});

type TAction =
  | ReturnType<typeof getNoteListActionSuccess>
  | ReturnType<typeof createNoteItemActionRequest>
  | ReturnType<typeof removeNoteItemActionRequest>
  | ReturnType<typeof updateNoteItemActionRequest>;

export default TAction;
