import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  marginTB: {
    margin: theme.spacing(2, "auto"),
  },
  card: {
    width: "100%",
    // margin: theme.spacing(2),
    // padding: theme.spacing(1),
  },
  pad: {
    padding: theme.spacing(1, 0),
    textAlign: "center",
    flewGrow: 1,
  },
  submit: {
    color: "#fff",
  }
}));

const electricSchema = yup.object({
  service: yup.string().required(),
  meter_no: yup.number().required(),
  amount: yup.number().required(),
});

const initialValues = {
  service: "",
  meter_no: "",
  amount: "",
};

const Eko = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  return (
      <>
      <Card className={classes.card}>
          <h2>
            Kindly fill this form
          </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={electricSchema}
          onSubmit={ async (value) => {
            try {
              if (!loading) {
                setSuccess(false);
                setLoading(true);
              }
              console.log(JSON.stringify(value, null, 4));

              setTimeout(() => {
                console.log(JSON.stringify(value, null, 4));
                setSuccess(true);
                setLoading(false);
              }, 10000);
            } catch (error) {
              setLoading(false);
              console.log(JSON.stringify(error));
              setHasError(error.message);
            }
          }
          }
        >
            {({ getFieldProps, touched, errors, handleSubmit }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid
                         className={classes.pad}
                         item
                         xs={12}
                        >
                            <TextField
                              select
                              label="Select company"
                              id="service"
                              fullWidth
                              variant="outlined"
                              required
                              helperText={touched.service && !!errors.service ? errors.service : null}
                              error={touched.service && !!errors.service}
                              {...getFieldProps("service")}
                            >
                                <MenuItem value="BPE-NGCABABB-OR">Abuja Postpaid Electric</MenuItem>
                                <MenuItem value="BPE-NGCABABA-OR">Abuja Prepaid Electric</MenuItem>
                                <MenuItem value="BPE-NGEK-OR">Eko Electric</MenuItem>
                                <MenuItem value="BPE-NGEN-OR">Enugu Electric Distribution</MenuItem>
                                <MenuItem value="BPE-NGIB-OR">Ibadan Electric Distribution</MenuItem>
                                <MenuItem value="BPE-NGCAAVB-OR">Kano Prepaid Electric</MenuItem>
                                <MenuItem value="BPE-NGCAAVC-OR">Kano Postpaid Electric</MenuItem>
                                <MenuItem value="BPE-NGIE-OR">Ikeja Electric</MenuItem>
                                <MenuItem value="BPE-NGCABIA-OR">Port Harcourt Prepaid Electric</MenuItem>
                                <MenuItem value="BPE-NGCABIB-OR">Port Harcourt Postpaid Electric</MenuItem>
                                <MenuItem value="BPE-NGKD-OR">Kaduna Electric</MenuItem>
                                <MenuItem value="BPE-NGJO-OR">Jos Electric</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid
                         className={classes.pad}
                         item
                         xs={12}
                        >
                          <TextField
                           required
                           variant="outlined"
                           fullWidth
                           label="Meter Number"
                           id="meter_no"
                           helperText={touched.meter_no && !!errors ? errors.meter_no : null}
                           error={touched.meter_no && !!errors.meter_no}
                           {...getFieldProps("meter_no")}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                           required
                           variant="outlined"
                           fullWidth
                           label="Amount"
                           id="amount"
                           helperText={touched.amount && !!errors ? errors.amount : null}
                           error={touched.amount && !!errors.amount}
                           {...getFieldProps("amount")}
                          />
                        </Grid>
                        <Grid
                         className={classes.pad}
                         item
                         xs={12}
                        >
                            <Button
                             type="submit"
                             variant="contained"
                             fullWidth
                             color="primary"
                             disabled={loading}
                             className={classes.submit}
                            >
                                Continue to pay
                                {loading && (
                                  <CircularProgress size={24} />
                                )}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                          {hasError && (
                            <p variant="subtitle1" color="error">
                              {hasError}
                            </p>
                          )}
                          {success && (
                            <p color="error">
                              Transaction successful
                            </p>
                          )}
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
      </Card>
      </>
  );
};

export default Eko;
