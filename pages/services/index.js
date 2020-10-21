import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tv from "@material-ui/icons/Tv";
import Payment from "@material-ui/icons/Payment";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import AccountBalance from "@material-ui/icons/AccountBalance";
import PhonelinkRing from "@material-ui/icons/PhonelinkRing";
import { makeStyles } from "@material-ui/core/styles";
import { ServicesHeader } from "../../src/components/screens/services/header";
import ServicesBanner from "../../src/components/screens/services/banner";
import ServicesFooter from "../../src/components/screens/services/footer";

const useStyles = makeStyles((theme) => ({
  root: {},
  boxContainer: {
    backgroundColor: "#fee",
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    overflow: "hidden",
  },
  flexWrapper: {
    display: "flex",
    // oveflow: "auto",
    flexWrap: "wrap",
    // justifyContent: 'space-between',
  },
  flexItem: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    width: "100px",
    textAlign: "center",
  },
  link: {
    cursor: "pointer",
    textDecoration: "none !important",
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
        <>
        <ServicesHeader />
        <ServicesBanner />
        <Container className={classes.root}>
            <Box className={classes.boxContainer}>
                <Typography color="primary" variant="h5">
                    Services at your convenient
                </Typography>
                <Paper className={classes.flexWrapper}>
                    <Box className={classes.flexItem}>
                      <Link href="/services/airtime" className={classes.link}>
                        <PhonelinkRing />
                      </Link>
                        {/* <PhoneIphone /> */}
                        <Link href="/services/airtime" className={classes.link}>Airtime</Link>
                    </Box>
                    <Box className={classes.flexItem}>
                        <Link href="/services/data" className={classes.link}>
                          <PhoneIphone />
                        </Link>
                        <br />
                        <Link href="/services/data" className={classes.link}>
                            Data
                        </Link>

                    </Box>
                    <Box className={classes.flexItem}>
                        <AccountBalance />
                        <Link href="/services/transfer" className={classes.link}>
                          Transfer
                        </Link>
                    </Box>
                    <Box className={classes.flexItem}>
                        <Tv />
                        <div>
                          <Link href="/services/tv" className={classes.link}>
                            CableTV
                          </Link>
                        </div>
                    </Box>
                    <Box className={classes.flexItem}>
                        <Payment />
                        <br />
                        <Link href="#" className={classes.link}>
                        ePin
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </Container>
        <ServicesFooter />
        </>
  );
};
export default Services;
