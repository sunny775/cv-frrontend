import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCampusList } from '../../../hooks/pageData';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    zIndex: 5,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navPad: {
    paddingBottom: '50px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function CampusListDrawer({ window, handleDrawerToggle, drawerOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const router = useRouter();
  const { data, loading } = useCampusList();
  console.log(data);

  const handleClick = (page) => router.push(`/campus/${page}`);
  const drawer = (
    <div className={classes.campusList}>
      <Divider />
      <List>
        <ListItem button >
            <ListItemText primary='header' />
          </ListItem>
        {data && data.map((e, index) => (
          <ListItem button key={e.id} onClick={() => handleClick(e.path)}>
            <ListItemIcon>{index % 2 === 0 ? <Icon color='secondary'>school</Icon> : <Icon color='primary'>school</Icon>}</ListItemIcon>
            <ListItemText primary={e.alias} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
           container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {data && drawer}
            {loading && <CircularProgress />}
          </Drawer>
        </Hidden>
      </nav>
  );
}

CampusListDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func,
  drawerOpen: PropTypes.bool,
  window: PropTypes.func,
};
