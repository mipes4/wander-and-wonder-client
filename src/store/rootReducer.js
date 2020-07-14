import { combineReducers } from "redux";
import appState from "./appState/reducer";
import player from "./player/reducer";

export default combineReducers({
  appState,
  player,
});
