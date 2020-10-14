import React from "react";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
// import ShoppingCart from "./Components/ShoppingCart";
import Pages from "./pages";

export default function Router() {
  useFirebaseConnect("stock");
  useFirebaseConnect("member");
  useFirebaseConnect("program");
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <BrowserRouter>
      <Header />
      <LinearProgress />
      <Container>
        {isLoaded(auth) && isEmpty(auth) && (
          <Switch>
            <Route path="/login" component={Pages.Login} />
            <Redirect to="/login" />
          </Switch>
        )}
        {isLoaded(auth) && isEmpty(auth) === false && (
          <Switch>
            <Route path="/stock" component={Pages.Stock} />
            <Route path="/members" component={Pages.Members} />
            <Route path="/" component={Pages.Members} />
          </Switch>
        )}
      </Container>
    </BrowserRouter>
  );
}
