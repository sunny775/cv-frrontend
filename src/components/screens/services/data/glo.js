import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as Yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const validationSchema = Yup.object({
  phone: Yup.number().min(5).required("Phone number is required"),
  data: Yup.string().required("Data plan is required"),
});

const initialValues = {
  phone: "",
  data: "",
};

const Glo = () => {
  const classes = useStyles();
  const [successful, setSuccessful] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
      <div className={classes.root}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={
              async (value) => {
                try {
                  if (!isLoading) {
                    setSuccessful(false);
                    setHasError(false);
                    setIsLoading(true);
                  }
                  setTimeout(() => {
                    console.log(JSON.stringify(value, null, 4));
                    setSuccessful(true);
                    setIsLoading(false);
                  }, 3000);
                } catch (error) {
                  setIsLoading(false);
                  console.log(JSON.stringify(error.message));
                  setHasError(error.message);
                }
              }
            }
          >
            {({ getFieldProps, touched, errors, handleSubmit }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                    >
                      <TextField
                        required
                        fullWidth
                        variant="outlined"
                        id="phone"
                        label="Phone number"
                        error={touched.phone && !!errors.phone}
                        helperText={touched.phone && !!errors.phone ? errors.phone : null}
                        {...getFieldProps("phone")}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <TextField
                      select
                        required
                        fullWidth
                        variant="outlined"
                        id="data"
                        label="Data Plan"
                        error={touched.data && !!errors.data}
                        helperText={
                          touched.data && !!errors.data
                            ? errors.data : null
                        }
                        {...getFieldProps("data")}
                      >
                        <MenuItem value="100">N100 = 150MB for 1Day</MenuItem>
                        <MenuItem value="200">N200 = 350MB for 2Days</MenuItem>
                        <MenuItem value="500">N500 = 1.3GB for 14Days</MenuItem>
                        <MenuItem value="1000">N1,000 = 2.9GB for 30Days</MenuItem>
                        <MenuItem value="1500">N1,500 = 4.1GB for 30Days</MenuItem>
                        <MenuItem value="2000">N2,000 = 5.8GB for 30Days</MenuItem>
                        <MenuItem value="2500">N2,500 = 7.7GB for 30Days</MenuItem>
                        <MenuItem value="3000">N3,000 = 10GB for 30Days</MenuItem>
                        <MenuItem value="4000">N4,000 = 13.25GB for 30Days</MenuItem>
                        <MenuItem value="5000">N5,000 = 18.25GB for 30Days</MenuItem>
                        <MenuItem value="8000">N8,000 = 29.5GB for 30Days</MenuItem>
                        <MenuItem value="10000">N10,000 = 50GB for 30Days</MenuItem>
                        <MenuItem value="15000">N15,000 = 93GB for 30Days</MenuItem>
                        <MenuItem value="18000">N18,000 = 119GB for 30Days</MenuItem>
                        <MenuItem value="20000">N20,000 = 138GB for 30Days</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      disabled={isLoading}
                      color="primary"
                      >
                        CONTINUE TO PAY
                        {isLoading && (
                          <CircularProgress size={24} color="primary" />
                        )}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      {successful && (
                        <Typography variant="subtitle1" color="primary">
                          Purchase was successful
                        </Typography>
                      )}

                      {hasError && (
                        <Typography variant="caption" color="error">
                          {hasError}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </form>
            )}
          </Formik>
      </div>
  );
};

export default Glo;
