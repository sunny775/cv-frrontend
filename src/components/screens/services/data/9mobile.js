import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  phone: yup.number().min(5).required("Phone number is required"),
  data: yup.number().required("Data plan is required"),
});

const initialValues = {
  phone: "",
  data: "",
};

const NineMobile = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [successful, setSuccessful] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                  setIsLoading(false);
                  setSuccessful(true);
                }, 5000);
              } catch (error) {
                console.log(error.message);
                setHasError(error.message);
                setIsLoading(false);
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
                    fullWidth
                    label="Phone number"
                    id="phone"
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
                    fullWidth
                    label="Data plan"
                    id="data"
                    error={touched.data && !!errors.data}
                    helperText={touched.data && !!errors.data ? errors.data : null}
                    {...getFieldProps("data")}
                  >
                    <MenuItem value="100"><h5>N100 = 100MB for 1Day</h5></MenuItem>
                    <MenuItem value="200"><h5>N200 = 650MB for 1Day</h5></MenuItem>
                    <MenuItem value="500"><h5>N500 = 500MB for 30Days</h5></MenuItem>
                    <MenuItem value="1000"><h5>N1,000 = 1.5GB for 30Days</h5></MenuItem>
                    <MenuItem value="1200"><h5>N1,200 = 2GB for 30Days</h5></MenuItem>
                    <MenuItem value="1500"><h5>N1,500 = 7GB for 7Days</h5></MenuItem>
                    <MenuItem value="2000"><h5>N2,000 = 4.5GB for 30Days</h5></MenuItem>
                    <MenuItem value="4000"><h5>N4,000 = 11GB for 30Days</h5></MenuItem>
                    <MenuItem value="5000"><h5>N5,000 = 15GB for 30Days</h5></MenuItem>
                    <MenuItem value="10000"><h5>N10,000 = 40GB for 30Days</h5></MenuItem>
                    <MenuItem value="15000"><h5>N15,000 = 75GB for 30Days</h5></MenuItem>
                    <MenuItem value="25000"><h5>N25,000 = 75GB for 90Days</h5></MenuItem>
                    <MenuItem value="50000"><h5>N50,000 = 165GB for 180Days</h5></MenuItem>
                    <MenuItem value="84992"><h5>N84,992 = 100GB for 100Days</h5></MenuItem>
                    <MenuItem value="100000"><h5>N100,000 = 3650GB for 365Days</h5></MenuItem>
                  </TextField>
              </Grid>
              <Grid
                item
                xs={12}
                >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isLoading}
                    >
                      CONTINUE TO PAY
                      {isLoading && (
                        <CircularProgress size={24} color="primary" />
                      )}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                  {successful && (
                    <Typography variant="caption" color="primary">
                      Transaction was made successfully!
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

export default NineMobile;
