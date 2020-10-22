import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewPost from '../src/components/NewPost';
import About from '../src/components/groups/About';
import Media from '../src/components/groups/Media';
import CampusListDrawer from '../src/components/groups/CampusListDrawer';
import { usePage } from '../src/hooks/pageData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  coverPhoto: {
    height: '30vh',
    width: '1005',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: '40vh',
    },
    backgroundImage: "url(images/profile-bg1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  campusesBtn: {
    position: 'fixed',
    top: 70,
    left: 50
  },
  btns: {
    width: '100%',
    margin: '20px auto',
  },
  groupName: {
    color: '#0d47a1',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '2.3em',
    letterSpacing: '2px',
    animation: '$shadow 2s linear infinite'
  },
  aside: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  loading: {
    width: '100%',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@keyframes shadow': {
    '0%': {
      textShadow: '2px 2px 5px #03a9f4',
    },
    '50%': {
      textShadow: '2px 2px 5px #000',
    },
    '100%': {
      textShadow: '2px 2px 5px #03a9f4'
    }
  }
}));

function GeneralPage() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [tab, setTab] = React.useState('main');
  const { pageData, loading } = usePage('general');

  const handleDrawerToggle = () => {
    setDrawerOpen((state) => !state);
  };

  return (
    <div className={classes.root}>
      <CampusListDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <Paper className={classes.mainArea} elevation={0}>
        <div>
            <div className={classes.coverPhoto}>
                <div className={classes.groupName}>GENERAL GROUP</div>
                <Hidden mdUp implementation="css">
                <Fab color="secondary" aria-label="Campus Groups" className={classes.campusesBtn} onClick={handleDrawerToggle}>
                   <MenuIcon />
                </Fab>
                </Hidden>
            </div>
        <Grid container component="div" className={classes.btns} spacing={2}>
            <Grid item xs={6} md={3}>
                <Button fullWidth variant='contained' onClick={() => setTab('main')} size='large' endIcon={<Icon>message</Icon>}>Posts</Button>
            </Grid>
            <Grid item xs={6} md={3}>
                <Link href='/general' >
                  <a>
                    <Button fullWidth variant='contained' size='large' endIcon={<Icon>people</Icon>}>General</Button>
                  </a>
                </Link>
            </Grid>
            <Grid item xs={6} md={3}>
                <Button fullWidth variant='contained' onClick={() => setTab('media')} size='large' endIcon={<Icon>collections</Icon>}>Media</Button>
            </Grid>
            <Grid item xs={6} md={3} >
                <Link href='/services'>
                  <a>
                    <Button fullWidth variant='contained' size='large' endIcon={<Icon>phone</Icon>}>Top Up</Button>
                  </a>
                </Link>
            </Grid>
        </Grid>
        <Grid container component="div" spacing={2}>
            <Grid item xs={12} md={8}>
                {tab === 'main' && (
                  <NewPost />
                )}
                {tab === 'media' && (
                  <Media />
                )}
            </Grid>

            <Grid item xs={false} md={4} className={classes.aside}>
                <div className={classes.asideContent}>
                    {pageData && (
                      <About >
                       {pageData.page.description}
                      </About>
                    )}
                    {loading && (
                      <Paper className={classes.loading}><CircularProgress /></Paper>
                    )}
                    <Media tab={tab} />
                </div>
            </Grid>
        </Grid>
        </div>

        {tab === 'about' && pageData && (
          <About name={pageData.page.name}>
            {pageData.page.description}
          </About>
        )}
        </Paper>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default GeneralPage;
