import React from "react";
import Link from "next/link";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import ElectricityForm from "../../src/components/screens/services/electricity/electric";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#378ef9",
    color: "#fff",
    padding: theme.spacing(2, 0, 3),
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
  }
}));

const Electricity = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <header className={classes.header}>
        <Container className={classes.container}>
          <h1>
              <span className={classes.goback}>
                <Link href="/services">
                  <KeyboardBackspace />
                </Link>
              </span>
            Electricity
          </h1>
        </Container>
      </header>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid
             item
             xs={12}
             sm={6}
             md={5}
            >
              <Paper className={classes.paper}>
                <ElectricityForm />
              </Paper>
            </Grid>
            <Grid
             item
             xs={12}
             sm={6}
             md={7}
            >
              <Paper className={classes.paper}>
                <h2>Electricity</h2>
                <p>
                Pay your electric bills instantly and print receipt after successful payment.
                  There is need for some description
                </p>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Paper className={classes.paper}>
                <h2>More on Electricity</h2>
                <p>
                  Much more description is needed here.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </div>
    </>
  );
};

export default Electricity;
