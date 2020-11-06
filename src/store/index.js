import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import { saveState, loadState } from "utils/localStrage";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(
  rootReducer,
  loadState(),
  composeEnhancers(applyMiddleware(...middleWares))
);

store.subscribe(() => {
  const state = store.getState();
  saveState({ member: state.member });
});

export default store;
