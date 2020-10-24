import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const OnlineBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const OfflineBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#bdbdbd",
    color: "#44b700",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    border: "6px solid #fafafa",
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(27),
      height: theme.spacing(27),
    },
  },
}));

export default function BadgeAvatars() {
  const classes = useStyles();

  const isonline = true;

  return (
    <div className={classes.root}>
      <div>
        {isonline ? (
          <OnlineBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src="images/avi.jpg"
              className={classes.avatar}
            />
          </OnlineBadge>
        ) : (
          <OfflineBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src="images/avi.jpg"
              className={classes.avatar}
            />
          </OfflineBadge>
        )}
      </div>
    </div>
  );
}
