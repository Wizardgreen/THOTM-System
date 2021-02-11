import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
// import { saveState, loadState } from "utils/localStorage";
import rootReducer from "./slice/rootReducer";

const extraArgument = {
  getFirebase,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        ...Object.keys(rrfActionTypes).map(
          (type) => `@@reactReduxFirebase/${type}`
        ),
      ],
      ignoredPaths: ["firebase"],
    },
    thunk: {
      extraArgument,
    },
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState: loadState(),
});

// store.subscribe(() => {
//   const state = store.getState();
//   saveState({ member: state.member });
// });

export default store;
