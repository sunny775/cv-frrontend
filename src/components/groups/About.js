import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
  about: {
    margin: 'auto'
  },
}));

export default function About({ children, name }) {
  const classes = useStyles();
  return (
      <Paper className={classes.root}>
            <Typography variant="h5" gutterBottom>
               ABOUT
            </Typography>
            <Typography variant="h6" gutterBottom>
               {name}
            </Typography>
            <Typography paragraph>
                {children}
           </Typography>
       </Paper>
  );
}
