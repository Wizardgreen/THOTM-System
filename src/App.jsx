import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Router from "./Router";
import store from "./store";
import firebase from "./config/firebase";
import rrfConfig from "./config/reactReduxFirebase";
import "./assets/i18n";
import { blue, pink } from "@material-ui/core/colors";
import "assets/global.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    type: "dark",
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  headerHeight: "64px",
});

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main id="app">
        <ReduxProvider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Router />
          </ReactReduxFirebaseProvider>
        </ReduxProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
