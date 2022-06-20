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
        data: [...state.data,action.payload],
      };
    }

    case ActionTypeEnum.NOTE_CREATE_REQUEST: {
      console.log("NOTE_CREATE_REQUEST", action.payload);

      // return {
      //   ...state,
      // };
    }
    // case ActionTypeEnum.ADD_NOTE:
    // console.log(action.payload);

    // return {
    //   ...state ,
    //   data: state.data.push(action.payload)
    // };
    default:
      return state;
  }
};

const getDataList = (state: RootState) =>
  (state.noteList as INoteDataResActionType).data;

export { reducer as noteStates, getDataList };