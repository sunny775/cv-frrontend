import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const schema = Yup.object({
  acc_no: Yup.number().required("Sart Card Number is required").min(5),
  package: Yup.string().required("Package is required"),
});

const initialValues = {
  acc_no: "",
  package: "",
};

const useStyles = makeStyles((theme) => ({
  root: {},
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    maxWidth: "100%",
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1, 0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MontageForm = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [successful, setSuccessful] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={
        async (value) => {
          try {
            if (!isLoading) {
              setIsLoading(true);
              setHasError(false);
              setSuccessful(false);
            }

            setTimeout(() => {
              console.log(JSON.stringify(value, null, 4));
              setSuccessful(true);
              setIsLoading(false);
            }, 3000);
          } catch (error) {
            console.log(error.message);
            setHasError(error.message);
          }
        }
      }
    >
      {({ getFieldProps, touched, errors, handleSubmit }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Card className={classes.card} md={4}>
            <h3>Montage Subscription</h3>
            {/* <CardHeader></CardHeader> */}
            <Grid container className={classes.paper} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="acc_no"
                  label="Account Number"
                  helperText={
                    touched.acc_no && !!errors.acc_no ? errors.acc_no : null
                  }
                  error={touched.acc_no && !!errors.acc_no}
                  {...getFieldProps("acc_no")}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid className={classes.paper}>
                <TextField
                  select
                  variant="outlined"
                  required
                  fullWidth
                  label="Choose package"
                  helperText={
                    touched.package && !!errors.package ? errors.package : null
                  }
                  error={touched.package && !!errors.package}
                  {...getFieldProps("package")}
                >
                  <MenuItem value="3500">
                    Montage Basic (1 Month) NGN3500
                  </MenuItem>
                  <MenuItem value="7000">
                    Montage Basic (2 Month) NGN7000
                  </MenuItem>
                  <MenuItem value="10500">
                    Montage Basic (3 Month) NGN10500
                  </MenuItem>
                  <MenuItem value="21000">
                    Montage Basic (6 Month) NGN21000
                  </MenuItem>
                  <MenuItem value="42000">
                    Montage Basic (1 Year) NGN42000
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                {successful && (
                  <Typography variant="subtitle1" color="primary">
                    Transaction successfully completed!
                  </Typography>
                )}
                {hasError && (
                  <Typography variant="subtitle1" color="error">
                    {hasError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              className={classes.submit}
              color="primary"
              variant="contained"
              fullWidth
              disabled={isLoading}
            >
              CONTINUE TO PAY
              {isLoading && (
                <CircularProgress size={24} color="primary" />
              )}
            </Button>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default MontageForm;
