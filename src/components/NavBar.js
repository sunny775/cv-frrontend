import React from "react";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddFriend from "@material-ui/icons/PersonAdd";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Link from 'next/link';
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: "blue",
  },
  addFriend: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
    },
  },
  title: {
    margin: theme.spacing(1),
  },
  homeIcon: {
    marginRight: theme.spacing(1),
    backgroundColor: "#eee",
    color: "#000",
    display: "none",
    boxShadow: "none",
    "&:active": {
      boxShadow: "none",
    },
    "&:hover": {
      background: "#E7F3FF",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    // display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolBar: {
    backgroundColor: "#fafafa",
  },
  menuItem: {
    width: "500px",
  },
  iconButton: {
    backgroundColor: "#eee",
    margin: "0 1px",
    "&:hover": {
      background: "#E7F3FF",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 10px",
    },
  },
}));

export default function PrimaryAppBar({ window, setDrawerOpen }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuItems, setItems] = React.useState(null);
  const router = useRouter();

  const { pathname } = router;

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setItems([
      <MenuItem onClick={handleMenuClose} key={1} className={classes.menuItem}>
        Test Notification A
      </MenuItem>,
      <MenuItem onClick={handleMenuClose} key={2}>
        Test Notification B
      </MenuItem>,
    ]);
  };
  const handleMessagesOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setItems([
      <MenuItem onClick={handleMenuClose} key={1} className={classes.menuItem}>
        Test Message 1
      </MenuItem>,
      <MenuItem onClick={handleMenuClose} key={2}>
        Test Message 2
      </MenuItem>,
    ]);
  };

  const handleMobileMenuOpen = () => {
    setDrawerOpen(true);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      elevation={2}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItems}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="transparent" elevation={trigger ? 3 : 0}>
        <Toolbar className={classes.toolBar}>
          <Link href='/'>
          <a>
            <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            className={classes.homeIcon}
          >
            <HomeIcon className={classes.title} />
            CampusVerse
          </Fab>
            </a>
            </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.iconButton, classes.addFriend)}
          >
            <AddFriend />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="latest messages"
              aria-controls="messages"
              aria-haspopup="true"
              onClick={handleMessagesOpen}
              color="inherit"
              className={classes.iconButton}
            >
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="latest notifications"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleNotificationsOpen}
              color="inherit"
              className={classes.iconButton}
            >
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
          {pathname === '/' ? <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> : null}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
