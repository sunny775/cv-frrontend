import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    data: null,
    loading: true
  },
});

export const onlineUsers = atom({
  key: "onlineUsers",
  default: {}
});
