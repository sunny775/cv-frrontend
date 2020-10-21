import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#378ef9",
    color: "#fff",
    padding: theme.spacing(4, 2, 18),
    position: "relative",
  },
  flex: {
    display: "flex",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    "@media and (max-width: 450px)": {
      flexwrap: "wrap",
    },
  },
  flexDetails: {
    flex: "1 0 auto",
  },
  flexlink: {
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    width: "90px",
    height: "25px",
    margin: theme.spacing(1, 2, 1, 0),
    "@media (max-width: 500px)": {
      width: "90px",
      height: "23px",
    },
    "@media (max-width: 350px)": {
      width: "90px",
      height: "23px",
    },
  },
  link: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.1),
    textDecorationLine: "none",
    "&:hover": {
      backgroundColor: "#cee3fd",
      borderRadius: "4px",
    },
    "@media (max-width: 500px)": {
      display: "block",
    },
  },
  pageLogo: {
    margin: theme.spacing(0, 3, 0, 1),
  },
  pageText: {
    margin: theme.spacing(2, 1),
  },
}));

const EServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.flexlink}>
            <Typography variant="button" className={classes.link}>
              <Link
                href="/"
                color="inherit"
                underline="none"
                className={classes.link}
              >
                9Ja Connect
              </Link>
            </Typography>
            <Typography variant="button" className={classes.link}>
              <Link
                href="airtime"
                color="inherit"
                underline="none"
                className={classes.link}
              >
                Airtime
              </Link>
            </Typography>
            <Typography variant="button" className={classes.link}>
              <Link
                href="/electricity"
                color="inherit"
                underline="none"
                className={classes.link}
              >
                Electricity
              </Link>
            </Typography>
            <Typography variant="button" className={classes.link}>
              <Link
                href="tv"
                color="inherit"
                underline="none"
                className={classes.link}
              >
                Cable TV
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h5">
              Airtime, Data Bundle, Utility Bills, Result Checker Vouchers
              <br />
              We Get you covered on everything
            </Typography>
          </Grid>
          <Grid item md={3}>
            Download our apps here
            <div className={classes.flex}>
            <CardMedia
              className={classes.img}
              image="/images/googleplay.png"
              title="Andriod Version"
            />
            <CardMedia
              className={classes.img}
              image="/images/appstore.png"
              title="iOS Version"
            />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EServices;
