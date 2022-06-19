import { INoteDataReqActionType, INoteDataResActionType } from "../../types";
import ActionTypeEnum from "../types";

export const loadNotesAction = (type?: string, payload?: any) => {
  return { type: ActionTypeEnum.LOAD_NOTES, payload };
};

export const notesLoadedAction = (payload: INoteDataResActionType["data"]) => ({
  type: ActionTypeEnum.NOTES_LOADED,
  payload,
});

export const notesAddAction = (payload: INoteDataReqActionType) => ({
  type: ActionTypeEnum.ADD_NOTE,
  payload,
});

export const notesAddedAction = (payload: INoteDataReqActionType) => ({
  type: ActionTypeEnum.NOTES_LOADED,
  payload,
});

type TAction =
  | ReturnType<typeof notesAddAction>
  | ReturnType<typeof notesLoadedAction>
  | ReturnType<typeof loadNotesAction>;

export default TAction;
