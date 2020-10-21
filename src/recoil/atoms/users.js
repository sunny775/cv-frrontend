import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const onlineUsers = atom({
  key: "onlineUsers",
  default: {}
});
