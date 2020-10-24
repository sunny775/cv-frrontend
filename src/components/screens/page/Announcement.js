import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useRecoilValue } from "recoil";
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { userState } from "../../../recoil/atoms/users";
import CampusListDrawer from './PageDrawer';
import Main from './Main';
import { usePage } from '../../../hooks/pageData';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

function Announcement() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { push } = useRouter();
  const { data, loading, } = usePage('announcements');
  const { data: user } = useRecoilValue(userState);

  const handleDrawerToggle = () => {
    setDrawerOpen((state) => !state);
  };

  if (!user) {
    push('/');
  }

  return (
    <div className={classes.root}>
        <CampusListDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
        <Main handleDrawerToggle={handleDrawerToggle} data={data} loading={loading} >
            <Link href='/general' >
                  <a>
                    <Button fullWidth variant='contained' size='large' endIcon={<Icon>people</Icon>}>General</Button>
                  </a>
           </Link>
        </Main>
    </div>
  );
}

export default Announcement;
