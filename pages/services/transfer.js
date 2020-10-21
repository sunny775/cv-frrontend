import React from "react";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import PhonelinkRing from "@material-ui/icons/PhonelinkRing";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Payment from "@material-ui/icons/Payment";
import Tv from "@material-ui/icons/Tv";

import Transfer from "../../src/components/screens/services/transfer/banktransfer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#378ef9",
    color: "#fff",
    padding: theme.spacing(2, 10, 3),
    margin: theme.spacing(0, "auto"),
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
  boxContainer: {
    backgroundColor: "#fee",
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
  flexWrapper: {
    display: "flex",
    oveflow: "scroll",
    flexWrap: "wrap",
  },
  flexItem: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    width: "100px",
    textAlign: "center",
  },
}));

const TransferFunds = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
          <div className={classes.header}>
              {/* <Container> */}
                <h1>
                  <span className={classes.goback}>
                    <Link href="/services">
                      <KeyboardBackspace />
                    </Link>
                  </span>
                  Fund Transfers to any Bank
                  </h1>
              {/* </Container> */}
          </div>
          <Container className={classes.container}>
              <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={5}
                  >
                    <Paper className={classes.paper}>
                      <Transfer />
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={7}
                  >
                    <Paper className={classes.paper}>
                      <h2>Bank Transfer</h2>
                      <p>
                          This is a short description to be made here.
                      </p>
                    </Paper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                  >
                    <Paper className={classes.paper}>
                      <h2>Bank Transfer</h2>
                      <p>
                        You can transfer money to any bank in Nigeria at no extra charges.
                        Kindly fill the form to get started right away.
                      </p>
                    </Paper>
                  </Grid>
              </Grid>
          </Container>
          <Container className={classes.container}>
            <Box className={classes.boxContainer}>
                <Typography color="primary" variant="h5">
                    Services at your convenient
                </Typography>
                <Paper className={classes.flexWrapper}>
                    <Box className={classes.flexItem}>
                        <PhonelinkRing />
                        <PhoneIphone />
                        Airtime
                    </Box>
                    <Box className={classes.flexItem}>
                        <PhoneIphone />
                        <Typography>
                            Data
                        </Typography>

                    </Box>
                    <Box className={classes.flexItem}>
                        <AccountBalance />
                        Transfer
                    </Box>
                    <Box className={classes.flexItem}>
                        <Tv />
                        CableTV
                    </Box>
                    <Box className={classes.flexItem}>
                        <Payment />
                        <Typography>
                        ePin
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
      </Box>
    </div>
  );
};

export default TransferFunds;
