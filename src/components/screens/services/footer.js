import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#556cd6",
    color: "#fff",
    padding: theme.spacing(3, 0, 6),
  },
  img: {
    width: "90px",
    height: "25px",
    "&:last-child": {
      margin: theme.spacing(0, 2)
    },
  },
  flex: {
    display: "flex",
  },
}));

const servicesFooter = () => {
  const classes = useStyles();

  return (
        <>
            <Box component="div" className={classes.root}>
                <Container>
                    <Grid container spacing={2} variant="contained">
                        <Grid item xs={12} md={6}>
                            <Typography>CampusVerve</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography>
                                <Link href="#" color="inherit">
                                  Bank Transfers
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#" color="inherit">
                                  Cable Tv Subscription
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#" color="inherit">
                                  Airtime recharge
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#" color="inherit">
                                  Data Bundle
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="#" color="inherit">
                                  Epin generator
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography>Download our app here</Typography>
                            <Box component="div" className={classes.flex}>
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
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
  );
};

export default servicesFooter;
