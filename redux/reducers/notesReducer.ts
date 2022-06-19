import TAction from "../actions/notesAction";
import ActionTypeEnum from "../types";

const iState: [] = [];

const notesReducer = (state = iState, action: TAction) => {
  switch (action.type) {
    case ActionTypeEnum.NOTES_LOADED:
      return action.payload;
    case ActionTypeEnum.NOTE_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};


export { notesReducer as reducer };
