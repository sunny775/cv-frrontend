import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { Formik } from "formik";
import * as yup from "yup";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { serverUrl } from '../../../utils/config';
import Copyright from "./Copyright";
import { userState } from "../../../recoil/atoms/users";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SigninForm = ({ setTab }) => {
  const classes = useStyles();
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const setUser = useSetRecoilState(userState);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (value) => {
        try {
          if (!loading) {
            setSuccess(false);
            setLoading(true);
          }
          const { data } = await axios.post(`${serverUrl}/auth/login`, value, { withCredentials: true });
          setSuccess(true);
          setLoading(false);
          console.log(data);
          setUser({ data, loading: false });
        } catch (error) {
          setLoading(false);
          setLoginError(error.response.data);
          console.log(error.response);
        }
      }}
      initialValues={{
        username: "",
        password: "",
      }}
    >
      {({ getFieldProps, touched, errors, handleSubmit }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            helperText={touched.username && !!errors.username ? errors.username : null}
            error={touched.username && !!errors.username}
            autoFocus
            {...getFieldProps("username")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            {...getFieldProps("password")}
            helperText={
              touched.password && !!errors.password ? errors.password : null
            }
            error={touched.password && !!errors.password}
          />
          {loginError && (
            <Grid item xs={12}>
              <Typography variant="body2" color="error" align="left">
                {loginError}
              </Typography>{" "}
            </Grid>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              className={buttonClassname}
            >
              Sign In
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setTab(2)}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      )}
    </Formik>
  );
};

SigninForm.propTypes = {
  setTab: PropTypes.func.isRequired,
};
export default SigninForm;
