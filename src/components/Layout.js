import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import Twemoji from 'react-twemoji';
import LinearBuffer from "./LinearBuffer";
import { userState } from "../recoil/atoms/users";
import ChatBox from './chat';
import NavBar from './NavBar';
import useSocket from '../utils/useSocket';
import MobileMoreDrawer from './screens/home/mobileMore';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: theme.spacing(8),
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const { loading } = useRecoilValue(userState);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { socket } = useSocket();

  const L = () => (
    <Twemoji>
      <div className={classes.root}>
        <MobileMoreDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <NavBar socket={socket} setDrawerOpen={setDrawerOpen} />
        <ChatBox socket={socket} />
       {children}
     </div>;
    </Twemoji>
  );

  // return <div>{children}</div>;
  return loading ? <LinearBuffer /> : <L />;
};
export default Layout;
