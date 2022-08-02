import { combineReducers } from "redux";
import developers from "./developers";
import feeds from "./feeds";
import feedresponses from "./feedresponses";
export default combineReducers({
  developers,feeds,feedresponses,
});