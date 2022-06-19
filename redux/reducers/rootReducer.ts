import { combineReducers } from "redux";
import { reducer } from "./notesReducer";

export default combineReducers({
  notesReducer: reducer,
  user: () => null,
});
