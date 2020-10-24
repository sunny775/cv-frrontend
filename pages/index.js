import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../src/recoil/atoms/users";
import Login from "../src/components/screens/auth";
import Home from '../src/components/screens/home';

export default function HomePage() {
  const { data } = useRecoilValue(userState);

  if (data) {
    return <Home />;
  }
  return <Login />;
}
