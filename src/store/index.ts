import thunk from "redux-thunk";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import rootReducer from "./reducer";
import { StoreType } from "./reducer/type";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const useTypedSelector: TypedUseSelectorHook<StoreType> = useSelector;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(getFirebase)))
);
