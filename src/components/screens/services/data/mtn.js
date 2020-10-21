import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  }
}));

const validationSchema = yup.object({
  phone: yup.number().min(5).required("Phone number is required"),
  data: yup.string().required("Data plan is required"),
});

const initialValues = {
  phone: "",
  data: "",
};

const MTN = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ async (value) => {
          try {
            if (!isLoading) {
              setSuccess(false);
              setHasError(false);
              setIsLoading(true);
            }
            console.log(JSON.stringify(value));
            setTimeout(() => {
              console.log(JSON.stringify(value, null, 4));
              setSuccess(true);
              setIsLoading(false);
            }, 10000);
          } catch (error) {
            console.log(error.message);
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
                    id="phone"
                    fullWidth
                    required
                    label="Phone number"
                    variant="outlined"
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
                    label="Data plan"
                    required
                    variant="outlined"
                    error={touched.data && !!errors.data}
                    helperText={touched.data && !!errors.data ? errors.data : null}
                    {...getFieldProps("data")}
                  >
                    <MenuItem value="100"><div>N100 = 100MB for 1Day</div></MenuItem>
                    <MenuItem value="200"><div>N200 = 200MB for 2Days</div></MenuItem>
                    <MenuItem value="300"><div>N300 = 350MB for 7Days</div></MenuItem>
                    <MenuItem value="300"><div>N300 = 1GB for 1Day</div></MenuItem>
                    <MenuItem value="500"><div>N500 = 2.5GB for 2Days</div></MenuItem>
                    <MenuItem value="500"><div>N500 = 1GB for 7Days</div></MenuItem>
                    <MenuItem value="500"><div>N500 = 750MB for 14Days</div></MenuItem>
                    <MenuItem value="1000"><div>N1,000 = 1.5GB for 30Days</div></MenuItem>
                    <MenuItem value="1200"><div>N1,200 = 2GB for 30Days</div></MenuItem>
                    <MenuItem value="1500"><div>N1,500 = 3GB for 30Days</div></MenuItem>
                    <MenuItem value="1500"><div>N1,500 = 6GB for 7Days</div></MenuItem>
                    <MenuItem value="2000"><div>N2,000 = 4.5GB for 30Days</div></MenuItem>
                    <MenuItem value="2500"><div>N2,500 = 6GB for 30Days</div></MenuItem>
                    <MenuItem value="3000"><div>N3,000 = 8GB for 30Days</div></MenuItem>
                    <MenuItem value="3500"><div>N3,500 = 10GB for 30Days</div></MenuItem>
                    <MenuItem value="5000"><div>N5,000 = 15GB for 30Days</div></MenuItem>
                    <MenuItem value="6000"><div>N6,000 = 20GB for 30Days</div></MenuItem>
                    <MenuItem value="8000"><div>N8,000 = 30GB for 60Days</div></MenuItem>
                    <MenuItem value="10000"><div>N10,000 = 40GB for 30Days</div></MenuItem>
                    <MenuItem value="15000"><div>N15,000 = 75GB for 30Days</div></MenuItem>
                    <MenuItem value="20000"><div>N20,000 = 75GB for 60Days</div></MenuItem>
                    <MenuItem value="20000"><div>N20,000 = 110GB for 30Days</div></MenuItem>
                    <MenuItem value="30000"><div>N30,000 = 120GB for 60Days</div></MenuItem>
                    <MenuItem value="50000"><div>N50,000 = 150GB for 90Days</div></MenuItem>
                    <MenuItem value="75000"><div>N75,000 = 250GB for 90Days</div></MenuItem>
                  </TextField>
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                    <Button
                      fullWidth
                      type="submit"
                      color="primary"
                      variant="contained"
                      disabled={isLoading}
                    >
                      CONTINUE TO PAY
                      {isLoading && (
                        <CircularProgress size={24} />
                      )};
                    </Button>
                </Grid>
                <Grid item xs={12}>
                  {success && (
                    <Typography variant="subtitle1" color="textPrimary">
                      Request was successful
                    </Typography>
                  )}
                  {hasError && (
                    <Typography variant="subtitle1" color="textPrimary">
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

export default MTN;
