import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(getFirebase)))
);
