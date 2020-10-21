import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useRecoilValue } from "recoil";
import LeftSideBar from "../src/components/profile/forUser/LeftSideBar";
import RightSideBar from "../src/components/profile/forUser/RightSideBar";
import Services from "../src/components/HomeMain/Services";
import Posts from "../src/components/HomeMain/Posts";
import { userState } from "../src/recoil/atoms/users";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#eee",
    padding: theme.spacing(0, 1),
  },
  image: {
    backgroundImage: "url(images/login1.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  sideBar: {
    background: "#eee",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

export default function Auth() {
  const classes = useStyles();
  const user = useRecoilValue(userState);

  return (
    <>
      <div className={classes.root}>
        <Grid container component="main" className={classes.root}>
          <LeftSideBar user={user} />
          <Grid item xs={12} md={6}>
            <Services />
            <Posts />
          </Grid>
          <RightSideBar user={user} />
        </Grid>
      </div>
    </>
  );
}
