import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "components/Header";
import Breadcrumbs from "components/Breadcrumb";
// import ShoppingCart from "./Components/ShoppingCart";
import Pages from "./pages";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    "main-container": {
      flex: 1,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    "progress-bar-container": {
      minHeight: theme.spacing(3),
    },
  };
});

export default function Router() {
  const isLoading = useSelector((state) => state.global.loading);
  const auth = useSelector((state) => state.firebase.auth);
  const classes = useStyle();

  return (
    <BrowserRouter>
      <Header />
      <Container className={classes["progress-bar-container"]}>
        <Fade
          unmountOnExit
          in={isLoading}
          style={{
            transitionDelay: isLoading ? "800ms" : "0ms",
          }}
        >
          <LinearProgress />
        </Fade>
      </Container>
      <Container id="router-container" className={classes["main-container"]}>
        <Breadcrumbs />
        {isLoaded(auth) && isEmpty(auth) && (
          <Switch>
            <Route path="/login" component={Pages.Login} />
            <Redirect to="/login" />
          </Switch>
        )}
        {isLoaded(auth) && isEmpty(auth) === false && (
          <Switch>
            <Route path="/stock" exact component={Pages.Stock} />
            <Route path="/member" exact component={Pages.Member} />
            <Route path="/member/:id" exact component={Pages.MemberEdit} />
            <Redirect to="/member" />
          </Switch>
        )}
      </Container>
    </BrowserRouter>
  );
}
