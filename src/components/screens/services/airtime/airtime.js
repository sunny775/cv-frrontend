import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as yup from "yup";
import { Formik } from "formik";

import axios from "axios";

const url = "https://api.flutterwave.com/v3/bills";
const token = "FLWSECK_TEST";

const useStyles = makeStyles((theme) => ({
  // root: {},
  card: {
    maxWidth: "100%",
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1, 0),
  },
  media: {
    width: "30px",
    height: "30px",
    marginRight: theme.spacing(0),
  },
  submit: {
    color: theme.palette.primary,
  },
}));

const schemaVals = yup.object({
  customer: yup.number().required("Phone number is required"),
  network: yup.string().required("Select network"),
  amount: yup.number().required("Amount is required"),
});

const initialvals = {
  customer: "",
  network: "",
  amount: "",
  type: "AIRTIME",
  country: "NG",
  reference: Date.now(),
};

const Airtime = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  return (
    <>
      <Formik
        validationSchema={schemaVals}
        initialValues={initialvals}
        onSubmit={async (value) => {
          try {
            if (!isLoading) {
              setSuccess(false);
              setIsLoading(true);
            }
            await axios.post(
              url,
              value,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json"
                }
              }
            );
            // console.log(JSON.stringify(value, null, 4));
            setTimeout(() => {
              console.log(JSON.stringify(value, null, 4));
              setSuccess(true);
              setIsLoading(false);
            }, 10000);
          } catch (error) {
            setIsLoading(false);
            console.log(JSON.stringify(error));
            setIsError(error.message);
          }
        }}
      >
        {({ getFieldProps, touched, errors, handleSubmit }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Card className={classes.card}>
              <Typography variant="h5">Airtime Recharge</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.paper}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="customer"
                    label="Phone Number"
                    helperText={
                      touched.customer && !!errors.customer
                        ? errors.customer
                        : null
                    }
                    error={touched.customer && !!errors.customer}
                    {...getFieldProps("customer")}
                  />
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                  <TextField
                    select
                    variant="outlined"
                    required
                    fullWidth
                    id="network"
                    label="Network provider"
                    helperText={
                      touched.network && !!errors.network
                        ? errors.network
                        : null
                    }
                    error={touched.network && !!errors.network}
                    {...getFieldProps("network")}
                  >
                    <MenuItem value="AIRTEL"> Airtel</MenuItem>
                    <MenuItem value="GLO">GLO</MenuItem>
                    <MenuItem value="MTN">MTN</MenuItem>
                    <MenuItem value="9MOBILE">9Mobile</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="amount"
                    label="Top up amount"
                    helperText={
                      touched.amount && !!errors.amount ? errors.amount : null
                    }
                    error={touched.amount && !!errors.amount}
                    {...getFieldProps("amount")}
                  />
                </Grid>
                {isError && (
                  <Grid item xs={12}>
                    <Typography variant="body2" color="error">
                      {isError}
                    </Typography>
                  </Grid>
                )}
                {success && (
                  <span color="success">Successfully recharged</span>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    disabled={isLoading}
                    className={classes.submit}
                  >
                    Recharge Now
                  {isLoading && (
                      <CircularProgress size={24} className={classes.submit} />
                  )}
                  </Button>
                  {isLoading && (
                      <CircularProgress size={24} className={classes.submit} />
                  )}
                </Grid>
              </Grid>
            </Card>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Airtime;
