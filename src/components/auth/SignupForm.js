import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Copyright from "./Copyright";
import schools from "../../utils/higherInstitutions";

const schema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup.string().required("Email is required"),
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
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

const SignupForm = ({ setTab, registerSuccess }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [signupError, setSignupError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const institutions = schools.map((e, i) => (
    <MenuItem value={e.name} key={e.code + i}>
      {e.name}
    </MenuItem>
  ));

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (value) => {
        try {
          if (!loading) {
            setSuccess(false);
            setLoading(true);
          }
          const userInfo = await axios.post("/auth/register", value);
          console.log("user created:", userInfo);
          await axios.post("/auth/email-verification", {
            email: value.email,
          });
          setSuccess(true);
          setLoading(false);
          registerSuccess();
        } catch (error) {
          setLoading(false);
          console.log(JSON.stringify(error));
          setSignupError(error.message);
        }
      }}
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        school: "",
      }}
    >
      {({
        getFieldProps,
        touched,
        errors,
        values,
        setFieldValue,
        handleSubmit,
      }) => (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                autoFocus
                {...getFieldProps("firstname")}
                helperText={
                  touched.firstname && !!errors.firstname
                    ? errors.firstname
                    : null
                }
                error={touched.firstname && !!errors.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                autoComplete="lname"
                {...getFieldProps("lastname")}
                helperText={
                  touched.lastname && !!errors.lastname ? errors.lastname : null
                }
                error={touched.lastname && !!errors.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                {...getFieldProps("email")}
                helperText={
                  touched.email && !!errors.email ? errors.email : null
                }
                error={touched.email && !!errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...getFieldProps("password")}
                helperText={
                  touched.password && !!errors.password ? errors.password : null
                }
                error={touched.password && !!errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-institution-label">
                  Select Institution
                </InputLabel>
                <Select
                  labelId="select-institution-label"
                  id="select-institution"
                  required
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={values.school}
                  onChange={(e) => setFieldValue("school", e.target.value)}
                >
                  <MenuItem value="">
                    <em>Default</em>
                  </MenuItem>
                  {institutions}
                </Select>
              </FormControl>
            </Grid>
            {signupError && (
              <Grid item xs={12}>
                <Typography variant="body2" color="error" align="left">
                  {signupError}
                </Typography>{" "}
              </Grid>
            )}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive occassional email notifications and updates."
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" align="left">
                By tapping SIGN UP, you are indicating that you accept our{" "}
                <Link href="terms-of-service">Terms of Service</Link> and{" "}
                <Link href="privacy-policy">Privacy Policy</Link>. An email
                verification link will be sent to you.
              </Typography>
            </Grid>
          </Grid>
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setTab(1)}>
                Already have an account? Sign in
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
export default SignupForm;
