import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
// import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
// import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, "auto"),
  },
  img: {
    width: "100%",
    height: 200,
    transition: "transform 1s",
    "&:hover": {
      transform: "scale(1.2)",
      overflow: "hidden",
    },
  },
  card: {
    // background: "#d1c4e9",
    // margin: theme.spacing(2),
  },
  column: {
    margin: theme.spacing(2),
    "@media (max-width: 769px)": {
      margin: theme.spacing(2, "auto"),
    },
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      // width: theme.spacing(50),
      height: theme.spacing(20),
    },
  },
}));

const ServicesBanner = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            // className={classes.column}
            md={3}
          >
            <Paper>
              <Card className={classes.card}>
                <CardMedia image="images/topup.png" className={classes.img} />
                <CardHeader title="Airtime recharge" />
                <CardContent>
                  <Typography variant="body2">
                    Get Airtime with awesome discount seamlessly
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            // className={classes.column}
            md={3}
          >
            <Paper>
              <Card>
                <CardMedia image="images/disco.png" className={classes.img} />
                <CardHeader title="Electricity Bill" />
                <CardContent>
                  <Typography variant="body2" component="p">
                    Get Airtime with awesome discount seamlessly
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            // className={classes.column}
            md={3}
          >
            <Paper>
              <Card>
                <CardMedia image="images/disco.png" className={classes.img} />
                <CardHeader title="Data Bundle" />
                <CardContent>
                  <Typography variant="body2" component="p">
                    Get Data bundle with awesome discount seamlessly
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            // className={classes.column}
            md={3}
          >
            <Paper>
              <Card>
                <CardMedia
                  image="images/cabletv1.jpg"
                  className={classes.img}
                />
                <CardHeader title="TV Subscription" />
                <CardContent>
                  <Typography variant="body2">
                    Get Airtime with awesome discount seamlessly
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ServicesBanner;
