import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { Formik } from "formik";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    padding: theme.spacing(1),
    width: "100%",
  },
}));

const validationSchema = yup.object({
  phone: yup.number().min(10).required("Phone number is require"),
  data: yup.string().required("Data plan is required"),
});

const initialValues = {
  phone: "",
  data: "",
};

const Airtel = () => {
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
            (value) => {
              try {
                if (!isLoading) {
                  setSuccessful(false);
                  setIsLoading(true);
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
          {({ getFieldProps, handleSubmit, errors, touched }) => (
              <form noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid
                     item
                     xs={12}
                    >
                      <TextField
                       id="phone"
                       label="Phone number"
                       fullWidth
                       error={touched.phone && !!errors.phone}
                       helperText={touched.phone && !!errors.phone ? errors.phone : null
                       }
                       {...getFieldProps("phone")}
                      />
                    </Grid>
                    <Grid
                     item
                     xs={12}
                    >
                      <TextField
                        select
                        fullWidth
                        label="Choose data"
                        id="data"
                        error={touched.data && !!errors.data}
                        helperText={touched.data && !!errors.data ? errors.data : null
                        }
                        {...getFieldProps("data")}
                       >
                          <MenuItem value="100"><span>N100 = 100MB for 1Day</span></MenuItem>
                          <MenuItem value="200"><span>200 = 200MB for 3Days</span></MenuItem>
                          <MenuItem value="300"><span>N300 = 1GB for 1Day</span></MenuItem>
                          <MenuItem value="300"><span>N300 = 350MB for 7Days</span></MenuItem>
                          <MenuItem value="500"><span>N500 = 2GB for 1Day</span></MenuItem>
                          <MenuItem value="500"><span>N500 = 750MB for 14Days</span></MenuItem>
                          <MenuItem value="1000"><span>N1,000 = 1.5GB for 30Days</span></MenuItem>
                          <MenuItem value="1200"><span>N1,200 = 2GB for 30Days</span></MenuItem>
                          <MenuItem value="1500"><span>N1,500 = 3GB for 30Days</span></MenuItem>
                          <MenuItem value="1500"><span>N1,500 = 6GB for 7Days</span></MenuItem>
                          <MenuItem value="2000"><span>N2,000 = 4.5GB for 30Days</span></MenuItem>
                          <MenuItem value="2500"><span>N2,500 = 6GB for 30Days</span></MenuItem>
                          <MenuItem value="3000"><span>N3,000 = 8GB for 30Days</span></MenuItem>
                          <MenuItem value="4000"><span>N4,000 = 11GB for 30Days</span></MenuItem>
                          <MenuItem value="5000"><span>N5,000 = 15GB for 30Days</span></MenuItem>
                          <MenuItem value="10000"><span>N10,000 = 40GB for 30Days</span></MenuItem>
                          <MenuItem value="15000"><span>N15,000 = 75GB for 30Days</span></MenuItem>
                          <MenuItem value="20000"><span>N20,000 = 110GB for 30Days</span></MenuItem>
                      </TextField>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
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
                        <Typography variant="subtitle1" color="primary">
                          Transaction was successful!
                        </Typography>
                      )}
                      {hasError && (
                        <Typography variant="subtitle1" color="error">
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

export default Airtel;
