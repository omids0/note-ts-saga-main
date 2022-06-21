import { Reducer } from "react";
import { noteData } from "../../../data/manualNotesData";
import { INoteDataResActionType } from "../../../types/DTO/note";
import { RootState } from "../../../types/redux";
import TAction from "../../actions/notes";
import ActionTypeEnum from "../../types";

const iState: INoteDataResActionType = {
  data: noteData,
};

const reducer: Reducer<INoteDataResActionType, TAction> = (
  state = iState,
  action
) => {
  switch (action.type) {
    case ActionTypeEnum.NOTE_GET_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }

    case ActionTypeEnum.NOTE_REMOVE_SUCCESS: {
      const data = state.data.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        data,
      };
    }

    case ActionTypeEnum.NOTE_UPDATE_SUCCESS: {
      const data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};

//note list az koja umade?!
const getDataList = (state: RootState) =>
  (state.noteList as INoteDataResActionType).data;

export { reducer as noteStates, getDataList };
