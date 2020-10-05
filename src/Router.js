import React from "react";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useFirebaseConnect } from "react-redux-firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
// import ShoppingCart from "./Components/ShoppingCart";
import Pages from "./pages";

export default function Router() {
  useFirebaseConnect("stock");
  useFirebaseConnect("member");
  useFirebaseConnect("program");
  return (
    <BrowserRouter>
      <Header />
      {/* <ShoppingCart /> */}
      <LinearProgress />
      <Container>
        <Switch>
          <Route path="/stock" component={Pages.Stock} />
          <Route path="/members" component={Pages.Members} />
          <Route path="/" component={Pages.Members} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
