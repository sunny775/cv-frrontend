import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// import Typograpy from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import DSTVForm from "./dstv";
import GotvForm from "./gotv";
import IrokotvForm from "./irokotv";
import Montage from "./montage";
import StartimesForm from "./startimes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div">
          <Box component="div">{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: "#f2f2f2",
  },
  tabpanel: {
    margin: "2px, auto",
  },
  cardImage: {
    width: "60px",
    height: "auto",
  },
}));

const AllCableTV = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Card position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          indicatorColor="primary"
          scrollButtons="on"
          textColor="primary"
          aria-label="scrollable force tabs tv"
          display="flex"
          className={classes.tabs}
        >
          <Tab
            label="DSTV"
            m="auto"
            icon={
              <CardMedia
                component="img"
                image="tv/dstv.png"
                className={classes.cardImage}
              />
            }
            {...allyProps(0)}
          />
          <Tab
            label="GOTV"
            icon={
              <CardMedia
                component="img"
                image="tv/gotv.png"
                className={classes.cardImage}
              />
            }
            {...allyProps(1)}
          />
          <Tab
            label="Startimes"
            icon={
              <CardMedia
                component="img"
                image="/tv/startimes.png"
                className={classes.cardImage}
              />
            }
            {...allyProps(2)}
          />
          <Tab
            label="Iroko TV"
            icon={
              <CardMedia
                component="img"
                image="/tv/iroko.png"
                className={classes.cardImage}
              />
            }
            {...allyProps(3)}
          />
          <Tab
            label="Montage"
            icon={
              <CardMedia
                component="img"
                image="/tv/montage.png"
                className={classes.cardImage}
              />
            }
            {...allyProps(4)}
          />
        </Tabs>
      </Card>
      <TabPanel
        className={classes.tabpanel}
        value={value}
        index={0}
      >
        <DSTVForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GotvForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StartimesForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <IrokotvForm />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Montage />
      </TabPanel>
    </div>
  );
};

export default AllCableTV;
