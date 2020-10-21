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
  iuc: Yup.number().required("IUC Number is required").min(5),
  package: Yup.string().required("Package is required"),
});

const initialValues = {
  iuc: "",
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

const GOtvForm = () => {
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
              setSuccessful(false);
              setHasError(false);
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
            <h4>GOTV Subscription</h4>
            <Grid container className={classes.paper} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="iuc"
                  label="IUC Number"
                  helperText={touched.iuc && !!errors.iuc ? errors.iuc : null}
                  error={touched.iuc && !!errors.iuc}
                  {...getFieldProps("iuc")}
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
                  <MenuItem value="410">Gotv Lite N410</MenuItem>
                  <MenuItem value="1640">Gotv Jinja Bouquet N1640</MenuItem>
                  <MenuItem value="2460">Gotv Jolli Bouquet N2460</MenuItem>
                  <MenuItem value="3600">Gotv Max N3600</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                {successful && (
                  <Typography variant="subtitle1" color="primary">
                    Transaction successfully completed!
                  </Typography>
                )}
                {hasError && (
                  <Typography variant="subtitle1" color="primary">
                    {hasError}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              className={classes.submit}
              color="primary"
              fullWidth
              disabled={isLoading}
              variant="contained"
            >
              CONTINUE TO PAY
              {isLoading && (
                <CircularProgress size={24} color="primary" aria-busy="true" aria-labelledby />
              )}
            </Button>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default GOtvForm;
