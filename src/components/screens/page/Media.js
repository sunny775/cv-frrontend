import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
  about: {
    margin: 'auto'
  },
  imageWrapper: {
    maxWidth: 300
  },
}));

export default function Media({tab}) {
  const classes = useStyles();
  return (
        <Paper className={classes.root}>
                      <Typography variant="h5" gutterBottom>
                        {tab ? 'Latest Media' : 'GALLERY'}
                      </Typography>
                      <Grid container component="div" spacing={2}>
                        <Grid item xs={6} sm={4} md={6}>
                          <div className={classes.imageWrapper}>
                             <img src='/images/avi1.png' width='100%' />
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={4} md={6}>
                          <div className={classes.imageWrapper}>
                             <img src='/images/avi1.png' width='100%' />
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={4} md={6}>
                          <div className={classes.imageWrapper}>
                             <img src='/images/avi1.png' width='100%' />
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={4} md={6}>
                          <div className={classes.imageWrapper}>
                             <img src='/images/avi1.png' width='100%' />
                          </div>
                        </Grid>
                      </Grid>
                    </Paper>
  );
}
