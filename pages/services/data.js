import React from "react";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";

import DataBundles from "../../src/components/screens/services/data/alldata";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#378ef9",
    padding: theme.spacing(2, 10, 3),
    maxWidth: "70rem",
    margin: theme.spacing(0, "auto"),
    color: "#fff",
  },
  goback: {
    marginRight: theme.spacing(2),
  },
  container: {
    margin: theme.spacing(3, "auto", 2),
    // padding: theme.spacing(0, 5),
    maxWidth: "70rem",
  },
  paper: {
    padding: theme.spacing(3, 2),
  },
}));

const Data = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <Box component="div" className={classes.header}>
            <header>
                <h2>
                  <span className={classes.goback}>
                    <Link href="/services">
                      <KeyboardBackspace />
                    </Link>
                  </span>
                  Data Bundle
                  </h2>
            </header>
          </Box>
          <Container className={classes.container}>
            <Grid container spacing={3} m={5}>
              <Grid
               item
               xs={12}
               md={5}
               sm={6}
              >
                <Paper className={classes.paper}>
                <DataBundles />
                </Paper>
              </Grid>
              <Grid
               item
               xs={12}
               sm={6}
               md={7}
               >
                   <Paper className={classes.paper}>
                       <h2>Quick Mobile Data Recharge</h2>
                       <p>
                           We offer at least 3% discount on all data purchased
                           unlike other website that offer less.
                       </p>
                   </Paper>
               </Grid>
              <Grid
               item
               xs={12}
              //  md={7}
               >
                   <Paper className={classes.paper}>
                       <h2>Mobile Data Recharge</h2>
                       <p>
                           Buy data for yourself and loved ones with
                           ease to any network (MTN, GLO, Airtel and 9Mobile)
                           and get a woopying discount on all recharge.
                       </p>
                   </Paper>
               </Grid>
            </Grid>
          </Container>
      </div>
  );
};

export default Data;
