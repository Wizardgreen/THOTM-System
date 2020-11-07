import React from "react";
import Container from "@material-ui/core/Container";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
// import ShoppingCart from "./Components/ShoppingCart";
import Pages from "./pages";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  const { headerHeight, spacing } = theme;
  return {
    header: {
      height: headerHeight,
    },
    container: {
      // height: `calc(100% - ${headerHeight})`,
      // padding: `${spacing(3)}px ${spacing(3)}px 0 ${spacing(3)}px`,
      flex: 1,
      padding: spacing(3),
    },
  };
});

export default function Router() {
  const auth = useSelector((state) => state.firebase.auth);
  const classes = useStyle();

  return (
    <BrowserRouter>
      <Header className={classes.header} />
      {/* <LinearProgress /> */}
      <Container id="router-container" className={classes.container}>
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
