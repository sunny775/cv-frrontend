import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fab from "@material-ui/core/Fab";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Badge from "@material-ui/core/Badge";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SearchBar from "../../SearchIcon";
import Avatar from "./AvatarSmall";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    background: "#eee",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  profileItemsContainer: {
    padding: theme.spacing(2, 0),
    margin: theme.spacing(1),
  },
  profileItem: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  hide: {
    opacity: 0,
  },
  profileItemIcon: {
    boxShadow: "none",
    "&:active": {
      boxShadow: "none",
    },
  },
  channels: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 5),
  },
  moreFriends: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2)
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);

  return (
    <Grid item xs={false} sm={3} className={classes.sideBar}>
      <div>
        <Paper className={classes.profileItemsContainer}>
          <SearchBar />
          <MenuList>
            <MenuItem className={classes.profileItem}>
              <Avatar
                src="images/avi1.png"
                isOnline={true}
                alt="Johanna Faruq"
              />
              <div>Johanna Faruq</div>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Avatar
                src="images/avi1.png"
                isOnline={true}
                alt="Johanna Faruq"
              />
              <div>Johanna Faruq</div>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Avatar
                src="images/avi1.png"
                isOnline={true}
                alt="Johanna Faruq"
              />
              <div>Johanna Faruq</div>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Avatar
                src="images/broken.png"
                isOnline={true}
                alt="Babatola Ike"
              />
              <div>Babatola Ike</div>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Avatar src="images/avi.jpg" alt="Lewis Ayanda" />
              <div>Lewis Ayanda</div>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Avatar src="images/avi.jpg" alt="Lewis Ayanda" />
              <div>Lewis Ayanda</div>
            </MenuItem>
            <div className={classes.moreFriends}>
              <Button aria-label="more">
                More
                <ArrowDownwardIcon fontSize="inherit" />
              </Button>
            </div>
          </MenuList>
        </Paper>
      </div>
    </Grid>
  );
}
