import { combineReducers } from "redux";
import global from "./global";
import stock from "./stock";
import shoppingCart from "./shoppingCart";
import member from "./member";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  global,
  shoppingCart,
  stock,
  firebase: firebaseReducer,
  member,
});
