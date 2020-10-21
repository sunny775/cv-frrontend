import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

import Airtel from "./airtel";
import NineMobile from "./9mobile";
import Glo from "./glo";
import MTN from "./mtn";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-tabpanel-${index}`}
        aria-labelledby={`scrollable-tab-${index}`}
        {...other}
      >
        {value === index && (
            <div>
              <Box component="div">{children}</Box>
            </div>
        )}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allProps(index) {
  return {
    id: `scrollable-tab-${index}`,
    "aria-controls": `scrollable-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  tabs: {
    // backgroundColor: "#b3d4fc",
    backgroundColor: "#f2f2f2",
  },
  tabpanel: {
    margin: theme.spacing(3, 0, 1),
  },
  cardImage: {
    width: "50px",
    height: "auto"
  }
}));

const AllDataBundle = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          indicatorColor="primary"
          scrollButtons="on"
          aria-label="scrollable data bundle tabs"
          display="flex"
          className={classes.tabs}
        >
        <Tab
          label="MTN"
          icon={
              <CardMedia
               component="img"
               image="data/mtn.png"
               className={classes.cardImage}
              />
          }
          {...allProps(0)}
          className={classes.tab}
        />
        <Tab
          label="Glo"
          icon={
              <CardMedia
               component="img"
               image="data/glo.png"
               className={classes.cardImage}
              />
          }
          {...allProps(1)}
        />
        <Tab
          label="Airtel"
          icon={
              <CardMedia
               component="img"
               image="data/airtel.png"
               className={classes.cardImage}
              />
          }
          {...allProps(2)}
        />
        <Tab
          label="9Mobile"
          icon={
              <CardMedia
               component="img"
               image="data/9mobile.png"
               className={classes.cardImage}
              />
          }
          {...allProps(3)}
        />
        </Tabs>
      </Box>
      <TabPanel
        className={classes.tabpanel}
        value={value}
        index={0}
      >
        <MTN />
      </TabPanel>
      <TabPanel
        className={classes.tabpanel}
        value={value}
        index={1}
      >
        <Glo />
      </TabPanel>
      <TabPanel
        className={classes.tabpanel}
        value={value}
        index={2}
      >
        <Airtel />
      </TabPanel>
      <TabPanel
        className={classes.tabpanel}
        value={value}
        index={3}
      >
        <NineMobile />
      </TabPanel>
    </div>
  );
};

export default AllDataBundle;
