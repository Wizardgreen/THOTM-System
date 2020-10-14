import React from "react";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { makeStyles } from "@material-ui/core/styles";
import PageWrapper from "components/PageWrapper";
// import Button from "components/Button";
// import TextField from "components/TextField";
import GoogleButton from "react-google-button";
// import Avatar from "components/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `128px auto 0 auto`,
    // paddingTop: "16px",
    padding: theme.spacing(5),
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // avatar: {
  //   width: "60px",
  //   height: "60px",
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // wrapper: {
  //   paddingBottom: theme.spacing(4),
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(2),
  //   "& > *": {
  //     marginTop: theme.spacing(3),
  //   },
  // },
  // button: {
  //   height: "56px",
  // },
}));
export default function Login() {
  const classes = useStyles();
  const firebase = useFirebase();
  // const auth = useSelector((state) => state.firebase.auth);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  // const handleSubmit = () => {
  //   firebase.login({
  //     email: username,
  //     password,
  //   });
  // };

  return (
    <PageWrapper className={classes.paper} name="login">
      {/* <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar> */}
      <GoogleButton onClick={loginWithGoogle} />
      {/* <form className={classes.wrapper}>
        <TextField
          value={username}
          onChange={(value) => setUsername(value)}
          label="email"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={password}
          onChange={(value) => setPassword(value)}
          label="password"
          variant="outlined"
          type="password"
          fullWidth
        />
      </form>
      <Button
        className={classes.button}
        onClick={handleSubmit}
        color="primary"
        size="large"
        fullWidth
        disabled={password === "" || username === ""}
      >
        login
      </Button> */}
    </PageWrapper>
  );
}
//
