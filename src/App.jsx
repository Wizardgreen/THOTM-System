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

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    type: "dark",
    // primary: {
    //   light: "#4a624f",
    //   main: "#213827",
    //   dark: "#001300",
    // },
    // secondary: {
    //   light: "#ffcf87",
    //   main: "#d79e59",
    //   dark: "#a3702d",
    // },
    // error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
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
      <main className="App">
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
