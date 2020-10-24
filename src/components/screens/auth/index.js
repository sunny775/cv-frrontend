import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import axios from "axios";
import Cookies from "js-cookie";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import initFirebase from "../../../utils/initFirebase";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { serverUrl } from '../../../utils/config';

initFirebase();

function getCookie(name) {
  return Cookies.get(name);
}

const postIdTokenToSessionLogin = (url, idToken, csrfToken) =>
  axios.post(url, { idToken, csrfToken }, { withCredentials: true });

const handleSignedInUser = () =>
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((idToken) => {
      const csrfToken = getCookie("csrfToken");
      console.log("csrf-t:", csrfToken);
      return postIdTokenToSessionLogin(
        `${serverUrl}/auth/sessionLogin`,
        idToken,
        csrfToken
      ).then(
        () => {
          // Redirect to homepage on success.
          console.log("signin successful");
          // window.location.assign("/");
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          console.log(error);
          // window.location.reload();
        }
      );
    });

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(images/login1.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Auth() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(1);
  const [openSnackBar, setOpen] = React.useState(false);

  const setTab = (value) => setActiveTab(value);

  const registerSuccess = () => {
    setActiveTab(1);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Snackbar
            open={openSnackBar}
            autoHideDuration={7000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              Your account is successfully created. Sign in to continue
            </Alert>
          </Snackbar>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {activeTab === 1 ? "Sign in" : "Sign up"}
          </Typography>
          {activeTab === 1 ? (
            <SigninForm
              setTab={setTab}
              handleSignedInUser={handleSignedInUser}
            />
          ) : (
            <SignupForm
              setTab={setTab}
              handleSignedInUser={handleSignedInUser}
              registerSuccess={registerSuccess}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
}
