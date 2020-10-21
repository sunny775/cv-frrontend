import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {useRecoilValue} from 'recoil'
import clsx from 'clsx';
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ChatInput from './chatInput';
import {userState} from '../../recoil/atoms/users';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0),
    width: "100vw",
    height: "90vh",
    overflowY: 'scroll',
    position: 'fixed',
    bottom: 0,
    right: 10,
    zIndex: 20,
    [theme.breakpoints.up("sm")]: {
      width: "400px",
      height: "70vh",
    },
  },
  openChat: {
    margin: theme.spacing(1, 0),
    width: "100vw",
    position: 'fixed',
    bottom: 0,
    right: 10,
    zIndex: 20,
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  window: {
    background: '#fff',
    width: '100%',
    height: '100%',
    margin: 'auto',
    padding: '10px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  header: {
    background: '#fff',
    padding: '10px',
    margin: '-10px -10px 8px -10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  },
  u1: {
    padding: '10px',
    fontWeight: 'lighter',
    fontSize: 'small',
    margin: '5px',
    float: 'left',
    clear: 'both',
    background: '#CCCCCC',
    borderRadius: '0px 20px 20px 20px',
    animation: `$bounceIn 300ms ${theme.transitions.easing.easeInOut}`
  },
  u2: {
    padding: '10px',
    color: '#fff',
    fontWeight: 'lighter',
    fontSize: 'small',
    margin: '5px',
    float: 'right',
    clear: 'both',
    background: '#1877F2',
    borderRadius: '20px 0px 20px 20px',
    animation: `$bounceIn 300ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes bounceIn': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.3)',
    },
    '50%': {
      opacity: 0.9,
      transform: ' scale(1.1)'
    },
    '80%': {
      opacity: 1,
      transform: 'scale(0.89)'
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)'
    }
  }
}));

const messages = [
  { sender: "test1@yahoo.com", text: "Hey sam, whats up?" },
  { sender: "scletus40@yahoo.com", text: "nothing here how bout u?" },
  { sender: "test1@yahoo.com", text: "Im just heading up to your neck of the woods for some work related stuff." },
  { sender: "scletus40@yahoo.com", text: "driveing through mcdonalds right now" },
  { sender: "test1@yahoo.com", text: "cool! where exactly will you be?" },
  { sender: "test1@yahoo.com", text: "up in the ridgway, mt. horab area" },
  { sender: "test1@yahoo.com", text: "Hey sam, whats up?" },
  { sender: "scletus40@yahoo.com", text: "nothing here how bout u?" },
  { sender: "test1@yahoo.com", text: "Im just heading up to your neck of the woods for some work related stuff." },
  { sender: "scletus40@yahoo.com", text: "driveing through mcdonalds right now" },
  { sender: "test1@yahoo.com", text: "cool! where exactly will you be?" },
  { sender: "test1@yahoo.com", text: "up in the ridgway, mt. horab area" },
];

export default function ChatBox() {
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      {open ? (
        <Paper className={classes.root} elevation={8}>
    <Button fullWidth variant='contained' endIcon={<Icon>keyboard_arrow_down</Icon>} onClick={handleClick}>Jerry</Button>
    <div className={classes.window}>
        <div className="chats">
          {messages.map((e) => {
            if (e.sender === user.email) {
              return (
                <div>
                  <div className={classes.u2}>{e.text}</div>
                </div>
              );
            }
            return (
              <div>
                <div className={classes.u1}>{e.text}</div>
              </div>
            );
          })}
        </div>

        <ChatInput />
    </div>
      </Paper>
      ) : (
        <Button fullWidth variant='contained' size='large' className={classes.openChat} endIcon={<Icon>keyboard_arrow_down</Icon>} onClick={handleClick}>Jerry</Button>
      )}
      </ClickAwayListener>
  );
}
