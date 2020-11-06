import { combineReducers } from "redux";
import stock from "./stock";
import shoppingCart from "./shoppingCart";
import modal from "./modal";
import member from "./member";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  modal,
  shoppingCart,
  stock,
  firebase: firebaseReducer,
  member,
});
