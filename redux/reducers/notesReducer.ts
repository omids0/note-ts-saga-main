import { Reducer } from "react";
import { INoteDataResActionType } from "../../types";
import { RootState } from "../../types/redux";
import TAction from "../actions/notesAction";
import ActionTypeEnum from "../types";

type InitialState = INoteDataResActionType;
const iState: INoteDataResActionType = {
  data: [],
};

const notesReducer: Reducer<InitialState, TAction> = (
  state = iState,
  action
) => {
  switch (action.type) {
    case ActionTypeEnum.NOTES_LOADED:
      console.log("redux=>", action.payload);

      return {
        ...state,
        ...action.payload,
      };
    // return action.payload;
    case ActionTypeEnum.NOTE_ADDED:
    // return [...state, action.payload];
    default:
      return state;
  }
};

const getDataList = (state: RootState) => (state.notesReducer as INoteDataResActionType).data;

export { notesReducer as reducer, getDataList };
