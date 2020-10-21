import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Top from './Top';
import Bottom from './Bottom';

const useStyles = makeStyles({
  drawerContent: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MobileMoreDrawer({ drawerOpen, setDrawerOpen }) {
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <div>
        <React.Fragment>
          <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
           <div className={classes.drawerContent}>
            <Top />
            <Bottom />
           </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}
