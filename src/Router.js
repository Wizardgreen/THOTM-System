import React from "react";
import Container from "@material-ui/core/Container";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
// import ShoppingCart from "./Components/ShoppingCart";
import Pages from "./pages";

export default function Router() {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <BrowserRouter>
      <Header />
      {/* <LinearProgress /> */}
      <Container>
        {isLoaded(auth) && isEmpty(auth) && (
          <Switch>
            <Route path="/login" component={Pages.Login} />
            <Redirect to="/login" />
          </Switch>
        )}
        {isLoaded(auth) && isEmpty(auth) === false && (
          <Switch>
            <Route path="/stock" exact component={Pages.Stock} />
            <Route path="/members" exact component={Pages.Members} />
            <Route path="/members/:id" exact component={Pages.MemberEdit} />
            <Redirect to="/members" />
          </Switch>
        )}
      </Container>
    </BrowserRouter>
  );
}
