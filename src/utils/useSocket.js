import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { userState, onlineUsers } from "../recoil/atoms/users";
import events from '../socket/eventsClient';
import { wsUrl, serverUrl } from './config';

function useSocket() {
  const [socket, setSocket] = useState(null);
  const setUser = useSetRecoilState(userState);
  const setOnlineUsers = useSetRecoilState(onlineUsers);
  const [loading, setLoading] = useState(true);

  const { USER_CONNECTED, USERLIST, USER_DISCONNECTED,
    LOGOUT, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT,
    TYPING, PRIVATE_MESSAGE } = events;

  useEffect(() => {
    axios
      .get(`${serverUrl}/userData`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        const socket = io(wsUrl);
        setSocket(socket);
        console.log(res.data);
        const { username, Chats } = res.data;
        socket.on('connect', () => {
          socket.emit(USER_CONNECTED, { name: username, chats: Chats });

          socket.on(USERLIST, (list) => {
            setOnlineUsers((users) => ({ ...users, ...list }));
          });

          socket.on(USER_CONNECTED, (user) => {
            setOnlineUsers((state) => {
              const newList = { ...state };
              newList[user.name] = user;
              return newList;
            });
          });

          socket.on(USER_DISCONNECTED, (name) => {
            setOnlineUsers((users) => {
              const newList = { ...users };
              delete newList[name];
              return newList;
            });
          });
        });
      })
      .catch(() => {
        setLoading(false);
        console.log("You are offline");
      });
  }, []);

  return {
    loading,
    socket
  };
}
export default useSocket;
