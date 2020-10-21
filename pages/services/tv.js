import React from "react";
import Link from "next/link";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ServicesFooter from "../../src/components/screens/services/footer";
// import ServicesHeader from "../src/client/components/screens/services/header/header";
import AllCableTV from "../../src/components/screens/services/tv/alltv";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#378ef9",
    color: "#fff",
    padding: theme.spacing(3, 0),
  },
  goback: {
    margin: theme.spacing(2),
    cursor: "pointer",
  },
  paper: {
    padding: theme.spacing(3, 2),
    color: theme.palette.text.secondary,
  },
  container: {
    margin: theme.spacing(3, "auto", 2),
    maxWidth: "70rem",
  },
  flexController: {
    display: "flex",
    flexWrap: "wrap",
  }
}));

const TVSub = () => {
  const classes = useStyles();

  return (
        <div className={classes.root}>
            <Box component="div" className={classes.header}>
                <Container className={classes.container}>
                    <Box component="header">
                <h2>
                  <span className={classes.goback}>
                    <Link href="/services">
                      <KeyboardBackspace />
                    </Link>
                  </span>
                  Cable TV Subscripton
                </h2>
                        {/* <Typography variant="h5" component="h2">
                            <NavigateBefore />
                            Cable TV Subscription
                        </Typography> */}
                    </Box>
                </Container>
            </Box>
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={5}
                >
                    <Paper className={classes.paper}>
                      <AllCableTV />
                    </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={7}
                >
                    <Paper className={classes.paper}>
                        <h2>
                            About Cable TV
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Some description about Cable TV
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <Paper className={classes.paper}>
                      <h2>Cable TV Subscripton</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua.
                             consectetur adipiscing elit, sed do eiusmod tempor
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua.
                             consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                  </Paper>
                </Grid>
            </Grid>
        </Container>
        <ServicesFooter />
        </div>
  );
};
export default TVSub;
