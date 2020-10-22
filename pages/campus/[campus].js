import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import CampusListDrawer from '../../src/components/groups/CampusListDrawer';
import Main from '../../src/components/screens/campus/dynamicMain';
import { useCampus} from '../../src/hooks/pageData';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

function Page() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { query: { campus } } = useRouter();
  const { data, loading, } = useCampus(campus);

  const handleDrawerToggle = () => {
    setDrawerOpen((state) => !state);
  };

  return (
    <div className={classes.root}>
      <CampusListDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <Main handleDrawerToggle={handleDrawerToggle} data={data} loading={loading} />
    </div>
  );
}

export default Page;
