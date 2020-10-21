import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import bankcodenames from "./bankscode";

// map out the array of imported banks
const ngBanks = bankcodenames.map((e) => (
    <MenuItem key={e.id} value={e.code}>
        {e.name}
    </MenuItem>
));

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    maxWidth: "100%",
    padding: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(1, 0),
  },
  submit: {
    color: theme.palette.primary,
  },
}));

const transferSchema = yup.object({
  bank: yup.string().required(),
  acc_no: yup.number().required("Account number is required"),
  amount: yup.number()
    .min(5)
    .required("Amount is required"),
});

const initialvals = {
  bank: "",
  acc_no: "",
  amount: "",
};

const BankTransfer = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [successful, setSuccessful] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
        <div>
            <Formik
              initialValues={initialvals}
              validationSchema={transferSchema}
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
                    <Card className={classes.card}>
                        <Typography variant="h4">
                            Quick Transfer to Banks
                        </Typography>
                        <Typography variant="body2">
                            Make quick transfer to preferred bank easily and without extra charges.
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} className={classes.paper}>
                                <TextField
                                  select
                                  required
                                  fullWidth
                                  variant="outlined"
                                  id="bank"
                                  label="Select Bank"
                                  helperText={touched.bank && !!errors.bank ? errors.bank : null}
                                  error={touched.bank && !!errors.bank}
                                  {...getFieldProps("bank")}
                                >
                                    { ngBanks }
                                </TextField>
                            </Grid>
                            <Grid item xs={12} className={classes.paper}>
                                <TextField
                                  required
                                  variant="outlined"
                                  label="Account Number"
                                  fullWidth
                                  id="acc_no"
                                  helperText={touched.acc_no && !!errors.acc_no ? errors.acc_no : null}
                                  error={touched.acc_no && !!errors.acc_no}
                                  {...getFieldProps("acc_no")}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.paper}>
                                <TextField
                                  required
                                  fullWidth
                                  label="Amount"
                                  variant="outlined"
                                  helperText={touched.amount && !!errors.amount ? errors.amount : null}
                                  error={touched.aomunt && !!errors.amount}
                                  {...getFieldProps("amount")}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.paper}>
                                <Button type="submit"
                                color="primary"
                                variant="contained"
                                disabled={isLoading}
                                fullWidth
                                >
                                    Submit
                                    {isLoading && (
                                      <CircularProgress size={24} color="primary" />
                                    )}
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                              {successful && (
                                <Typography variant="subtitle1" color="primary">
                                  Transferred successfully
                                </Typography>
                              )}
                              {hasError && (
                                <Typography variant="subtitle1" color="error">
                                  {hasError}
                                </Typography>
                              )}
                            </Grid>
                        </Grid>
                    </Card>
                </form>
                )}
            </Formik>
        </div>
  );
};

export default BankTransfer;
