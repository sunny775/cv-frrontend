import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";
import AirtimeForm from "./airtime";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#378ef9",
    color: "#fff",
    padding: theme.spacing(2, 0, 5),
  },
  goback: {
    margin: theme.spacing(2),
    cursor: "pointer",
  },
  container: {
    margin: theme.spacing(3, "auto", 2),
    maxWidth: "70rem",
  },
  paper: {
    padding: theme.spacing(3, 2),
  },
}));

const AirtimeRecharge = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Box component="header" className={classes.header}>
        <Container className={classes.container}>
            <h1>
                <span className={classes.goback}>
                  <Link href="/services">
                    <KeyboardBackspace />
                  </Link>
                </span>
                Buy Airtime
            </h1>
        </Container>
      </Box>
      <Container className={classes.container}>
        <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
            >
              <Paper className={classes.paper}>
                <AirtimeForm />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={7}
            >
                <Paper className={classes.paper}>
                    <h2>
                        Buy Airtime
                    </h2>
                    <p>
                        A holistic description is needed here.
                    </p>
                </Paper>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Paper className={classes.paper}>
                <h2>Airtime Top up</h2>
                <p>
                  Top up airtime for yourself and loved ones with just a few click.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Paper>
            </Grid>
        </Grid>
      </Container>
      </div>
  );
};

export default AirtimeRecharge;
