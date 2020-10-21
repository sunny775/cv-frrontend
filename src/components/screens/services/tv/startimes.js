import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const schema = Yup.object({
  scard: Yup.number()
    .required("Smart Card number is required")
    .min(5),
  amount: Yup.string().required("Top up amount is required"),
});

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

const StartimesForm = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);
  const [successful, setSuccessful] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
        <Formik
          validationSchema={schema}
          initialValues={{
            scard: "",
            amount: ""
          }}
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
                    <Card className={classes.card} md={4}>
                        <h3>
                            Startimes
                        </h3>
                        <Grid container
                          className={classes.paper}
                          spacing={3}
                        >
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="scard"
                                label="Smart Card Number"
                                helperText={touched.scard && !!errors.scard ? errors.scard : null}
                                error={touched.scard && !!errors.scard}
                                {...getFieldProps("scard")}
                                />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Top-up Amount"
                                helperText={touched.amount && !!errors.amount ? errors.amount : null}
                                error={touched.amount && !!errors.amount}
                                {...getFieldProps("amount")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                              {successful && (
                                <Typography variant="subtitle1" color="primary">
                                  Transaction was successful
                                </Typography>
                              )}
                              {hasError && (
                                <Typography variant="subtitle1" color="primary">
                                  {hasError}
                                </Typography>
                              )}
                            </Grid>
                        </Grid>
                        <Button type="submit"
                          className={classes.submit}
                          color="primary"
                          variant="contained"
                          disabled={isLoading}
                          fullWidth
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

export default StartimesForm;
