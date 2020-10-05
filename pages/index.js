import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../src/components/NavBar";
import LeftSideBar from "../src/components/profile/forUser/LeftSideBar";
import RightSideBar from "../src/components/profile/forUser/RightSideBar";
import Services from "../src/components/HomeMain/Services";
import Posts from "../src/components/HomeMain/Posts";
import PostList2, { users } from "../src/components/PostList";
import { initializeApollo } from "../lib/apolloClient";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#eee",
    marginTop: theme.spacing(8),
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

const Home = () => {
  const classes = useStyles();
  React.useEffect(() => {
    fetch("https://jaconnect.ew.r.appspot.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        users,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log("data returned:", data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid container component="main" className={classes.root}>
          <LeftSideBar />
          <Grid item xs={12} md={6}>
            <Services />
            <Posts />
          </Grid>
          <RightSideBar />
        </Grid>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const apolloClient = initializeApollo();

    await apolloClient.query({
      query: users,
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        error: "Error fetching data from api",
      },
    };
  }
}

export default Home;
