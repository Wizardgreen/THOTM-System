import { combineReducers } from "redux";
import stock from "./stock";
import { firebaseReducer } from "react-redux-firebase";
import { RootStateType } from "./type";

export default combineReducers<RootStateType>({
  stock,
  firebase: firebaseReducer,
});
