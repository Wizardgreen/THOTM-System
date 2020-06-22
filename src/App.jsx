import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useFirebaseConnect } from "react-redux-firebase";
import store from "./store";
import firebase from "./config/firebase";
import rrfConfig from "./config/reactReduxFirebase";
import StockPage from "./Pages/Stock/index.jsx";
import Header from "./Components/Header";
import ShoppingCart from "./Components/ShoppingCart";
import "./assets/i18n";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      light: "#4a624f",
      main: "#213827",
      dark: "#001300",
    },
    secondary: {
      light: "#ffcf87",
      main: "#d79e59",
      dark: "#a3702d",
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

function Page() {
  useFirebaseConnect("stock");
  useFirebaseConnect("member");
  return (
    <Container>
      <ShoppingCart />
      <Switch>
        <Route path="/stock" component={StockPage} />
        <Route path="/member" />
        <Route path="/" component={StockPage} />
      </Switch>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="App">
        <ReduxProvider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
              <Header />
              <Page />
            </BrowserRouter>
          </ReactReduxFirebaseProvider>
        </ReduxProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
