import { combineReducers } from "redux";
import appState from "./appState/reducer";
import player from "./player/reducer";
import countries from "./countries/reducer";
import scores from "./scores/reducer";

export default combineReducers({
  appState,
  player,
  countries,
  scores,
});
