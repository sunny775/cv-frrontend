import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Badge from "@material-ui/core/Badge";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Avatar from "./AvatarLarge";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    background: "#eee",
    display: "none",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  avatar: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
    borderRadius: theme.spacing(1),
    backgroundImage: "url(images/profile-bg1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  userInfo: {
    padding: theme.spacing(4),
    margin: theme.spacing(2, 0),
    letterSpacing: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
  },
  name: {
    letterSpacing: theme.spacing(0.3),
  },
  school: {
    color: theme.palette.primary.light,
    letterSpacing: theme.spacing(0.2),
  },
  profileItemsContainer: {
    padding: theme.spacing(4, 0),
    margin: theme.spacing(2, 0),
  },
  profileItem: {
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
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
}));

export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);

  return (
    <Grid item xs={false} sm={3} className={classes.sideBar}>
      <div className={classes.avatar}>
        <Avatar />
      </div>
      <Paper className={classes.userInfo}>
        <Typography variant="h5" className={classes.name}>
          Sonnie Cletus
        </Typography>
        <Typography className={classes.school}>
          <small>Lagos State University</small>
        </Typography>
      </Paper>
      <div>
        <Paper className={classes.profileItemsContainer}>
          <MenuList>
            <MenuItem className={classes.profileItem}>
              <Fab
                aria-label="courses"
                size="small"
                className={classes.profileItemIcon}
              >
                <img src="icons/about.png" />
              </Fab>
              <div>About</div>
              <Badge
                badgeContent={4}
                color="secondary"
                className={classes.hide}
              ></Badge>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Fab
                aria-label="courses"
                size="small"
                className={classes.profileItemIcon}
              >
                <img src="icons/courses.png" />
              </Fab>
              <div>Courses</div>
              <Badge badgeContent={4} color="secondary"></Badge>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Fab
                aria-label="friends"
                size="small"
                className={classes.profileItemIcon}
              >
                <img src="icons/friends.png" />
              </Fab>
              <div>Friends</div>{" "}
              <Badge badgeContent={4} color="secondary"></Badge>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Fab
                aria-label="groups"
                size="small"
                className={classes.profileItemIcon}
              >
                <img src="icons/groups.png" />
              </Fab>
              <div>Groups</div>{" "}
              <Badge badgeContent={4} color="secondary"></Badge>
            </MenuItem>
            <MenuItem className={classes.profileItem}>
              <Fab
                aria-label="pages"
                size="small"
                className={classes.profileItemIcon}
              >
                <img src="icons/pages.png" />
              </Fab>
              <div>Pages</div>
              <Badge badgeContent={<AddIcon />} color="secondary"></Badge>
            </MenuItem>
            <ButtonGroup
              className={classes.channels}
              orientation="vertical"
              color="primary"
              aria-label="vertical contained primary button group"
              variant="text"
            >
              <Button>General</Button>
              <Button>Announcement</Button>
              <Button>Unilag</Button>
            </ButtonGroup>
          </MenuList>
        </Paper>
      </div>
    </Grid>
  );
}
