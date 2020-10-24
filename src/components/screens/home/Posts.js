import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InsertPhoto from "@material-ui/icons/InsertPhoto";

const useStyles = makeStyles((theme) => ({
  postsContainer: {
    margin: theme.spacing(2, 0),
    width: "100%",
  },
  newPost: {
    padding: theme.spacing(2),
  },
  newPostInputContainer: {
    padding: theme.spacing(3, 0),
  },
  newPostInput: {
    width: "100%",
  },
  iconButton: {
    backgroundColor: "#eee",
    margin: "0 2px",
    "&:hover": {
      background: "#E7F3FF",
    },
  },
  emoji: {
    fontSize: "1.3em",
  },
}));

export default function Posts() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.postsContainer}>
        <Paper className={classes.newPost}>
          <div className={classes.newPostInputContainer}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Add New Post"
                className={classes.newPostInput}
              />
            </form>
          </div>
          <div>
            <IconButton
              edge="end"
              aria-label="insert image"
              aria-controls="insert-image"
              aria-haspopup="true"
              color="inherit"
              className={classes.iconButton}
            >
              <InsertPhoto />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="insert emoji"
              aria-controls="insert-emoji"
              aria-haspopup="true"
              color="inherit"
              className={clsx(classes.iconButton, classes.emoji)}
            >
              😍
            </IconButton>
          </div>
        </Paper>
      </Paper>
    </div>
  );
}
