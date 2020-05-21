import { combineReducers } from "redux";
import stock from "./stock";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  stock,
  firebase: firebaseReducer,
});
