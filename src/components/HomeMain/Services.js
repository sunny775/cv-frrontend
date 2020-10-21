import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    background: "#eee",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  servicesContainer: {
    margin: theme.spacing(1, 0),
    width: "100%",
  },
  serviceItem: {
    "&:nth-child(1)": {
      borderRight: "1px solid #eee",
    },
    "&:nth-child(2)": {
      borderRight: "1px solid #eee",
    },
  },
  itemLink: {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    justifyContent: "space-between",
    padding: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      padding: theme.spacing(7, 2),
    },
  },
  icon: {
    boxShadow: `0 0 0 2px ${theme.palette.secondary.light}`,
    borderRadius: "50%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      margin: 0,
    },
  },
  menuList: {
    width: "100%",
  },
}));

export default function Services() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.servicesContainer}>
        <Grid container component={MenuList} className={classes.menuList}>
            <Grid
            item
            xs={4}
            component={MenuItem}
            className={classes.serviceItem}
          >
            <Link href='/campus'>
            <a className={classes.itemLink}>
              <div>Campus</div>
              <ChevronRight className={classes.icon} />
            </a>
          </Link>
          </Grid>
          <Grid
            item
            xs={4}
            component={MenuItem}
            className={classes.serviceItem}
          >
            <Link href='study-area'>
            <a className={classes.itemLink}>
              <div>Classroom</div>
            <ChevronRight className={classes.icon} />
            </a>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
            component={MenuItem}
            className={classes.serviceItem}
          >
            <Link href='/services'>
              <a className={classes.itemLink}>
                <div>Top-up</div>
                <ChevronRight className={classes.icon} />
              </a>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
