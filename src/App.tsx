import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store from "./store";
import firebase from "./config/firebase";
import rrfConfig from "./config/reactReduxFirebase";
import StockPage from "./Pages/Stock";
import Header from "./Components/Header";
import "./assets/i18n";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};
// const database = firebase.database();
// database
//   .ref("/")
//   .once("value")
//   .then((data) => console.log(data.val()));
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="App">
        <ReduxProvider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
              <Header />
              <Container>
                <Switch>
                  <Route path="/stock" component={StockPage} />
                  <Route path="/member" />
                  <Route path="/" component={StockPage} />
                </Switch>
              </Container>
            </BrowserRouter>
          </ReactReduxFirebaseProvider>
        </ReduxProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
