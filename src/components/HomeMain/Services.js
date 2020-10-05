import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    "&:nth-child(1)": {
      borderRight: "1px solid #eee",
    },
    "&:nth-child(2)": {
      borderRight: "1px solid #eee",
    },
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
            <div>Campus</div>
            <ChevronRight className={classes.icon} />
          </Grid>
          <Grid
            item
            xs={4}
            component={MenuItem}
            className={classes.serviceItem}
          >
            <div>Classroom</div>
            <ChevronRight className={classes.icon} />
          </Grid>
          <Grid
            item
            xs={4}
            component={MenuItem}
            className={classes.serviceItem}
          >
            <div>Top-up</div>
            <ChevronRight className={classes.icon} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
