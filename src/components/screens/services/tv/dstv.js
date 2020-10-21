import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const schema = Yup.object({
  scard: Yup.number().required("Smart Card number is required").min(5),
  package: Yup.string().required("Package is required"),
});

const initialValues = {
  scard: "",
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
    flewGrow: 1,
  },
}));

const DSTV = () => {
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
              console.log(JSON.stringify(value));
              setSuccessful(true);
              setIsLoading(false);
            }, 3000);
          } catch (error) {
            console.log(error.message);
            setHasError(error.error);
          }
        }
      }
    >
      {({ getFieldProps, touched, errors, handleSubmit }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Card className={classes.card} md={4}>
            <Typography component="h3">DSTV Subscription</Typography>
            <CardHeader></CardHeader>
            <Grid container className={classes.paper} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="scard"
                  label="Smart Card Number"
                  helperText={
                    touched.scard && !!errors.scard ? errors.scard : null
                  }
                  error={touched.scard && !!errors.scard}
                  {...getFieldProps("scard")}
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
                  <MenuItem value="1850">Padi N1850</MenuItem>
                  <MenuItem value="2565">Dstv Yanga Bouquet E36 N2565</MenuItem>
                  <MenuItem value="4150">Padi + French Touch N4150</MenuItem>
                  <MenuItem value="4350">Padi + HDPVR/XtraView N4350</MenuItem>
                  <MenuItem value="4615">
                    Dstv Confam Bouquet E36 N4615
                  </MenuItem>
                  <MenuItem value="4865">
                    Dstv Yanga Bouquet E36 + French Touch N4865
                  </MenuItem>
                  <MenuItem value="5065">
                    Dstv Yanga Bouquet E36 + HDPVR/XtraView N5065
                  </MenuItem>
                  <MenuItem value="6200">Asian Bouquet N6200</MenuItem>
                  <MenuItem value="6915">
                    Dstv Confam Bouquet E36 + French Touch N6915
                  </MenuItem>
                  <MenuItem value="7115">
                    Dstv Confa Bouquet E36 + HDPVR/XtraView N7115
                  </MenuItem>
                  <MenuItem value="7900">Dstv Compact N7900</MenuItem>
                  <MenuItem value="8050">Padi + Asian Addd-on N8050</MenuItem>
                  <MenuItem value="8500">
                    Asian Bouquet + French Touch N8500
                  </MenuItem>
                  <MenuItem value="8700">
                    Asian Bouquet + HDPVR/XtraView N8700
                  </MenuItem>
                  <MenuItem value="8765">
                    Dstv Yanga Bouquet E36 + Asian Add-on N8765
                  </MenuItem>
                  <MenuItem value="9950">Padi + French Plus N9950</MenuItem>
                  <MenuItem value="10200">
                    Dstv Compact + French Touch N10200
                  </MenuItem>
                  <MenuItem value="10400">
                    Dstv + HDPVR/XtraView N10400
                  </MenuItem>
                  <MenuItem value="10665">
                    Dstv Yanga Bouquet e36 + French Plus N10665
                  </MenuItem>
                  <MenuItem value="10815">
                    Dstv Confam Bouquet E36 + Asian Add-on N10815
                  </MenuItem>
                  <MenuItem value="12400">Dstv Compact Plus N12400</MenuItem>
                  <MenuItem value="12715">
                    Dstv Confam Bouquet, E36 + French Plus N12715
                  </MenuItem>
                  <MenuItem value="14100">
                    Dstv Compact + Asian Add-on N14100
                  </MenuItem>
                  <MenuItem value="14300">
                    Asian Bouquet + French Plus N14300
                  </MenuItem>
                  <MenuItem value="14700">
                    Dstv Compact Plus + French Touch N14700
                  </MenuItem>
                  <MenuItem value="14900">
                    Dstv Compact Plus + HDPVR/XtraView N14900
                  </MenuItem>
                  <MenuItem value="16000">
                    Dstv Compact + French Plus N16000
                  </MenuItem>
                  <MenuItem value="18400">Dstv Premium N18400</MenuItem>
                  <MenuItem value="18600">
                    Dstv Compact Plus + Asian Add-on N18600
                  </MenuItem>
                  <MenuItem value="20500">
                    Dstv Compact Plus + French Plus N20500
                  </MenuItem>
                  <MenuItem value="20700">
                    Dstv Premium + French Touch N20700
                  </MenuItem>
                  <MenuItem value="20900">
                    Dstv Premium + HDPVR/XtraView N20900
                  </MenuItem>
                  <MenuItem value="22800">
                    Dstv Premium Asian + French Touch N22800
                  </MenuItem>
                  <MenuItem value="23000">
                    Dstv Premium Asia + HDPVR/XtraView N23000
                  </MenuItem>
                  <MenuItem value="24600">
                    Dstv Premium + Asian Add-on N24600
                  </MenuItem>
                  <MenuItem value="26500">
                    Dstv Premium + French Plus N26500
                  </MenuItem>
                  <MenuItem value="28600">
                    Dstv Premium Asia + French Plus N28600
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
              variant="contained"
              disabled={isLoading}
              fullWidth
            >
              CONTINUE TO PAY
              {isLoading && (
                <CircularProgress size={24} color="primary" aria-busy="true" />
              )}
            </Button>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default DSTV;
