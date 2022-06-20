import { combineReducers } from "redux";
import { noteStates } from "./reducers/notes";

export default combineReducers({
  noteList: noteStates,
});
