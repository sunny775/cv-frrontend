import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../src/recoil/atoms/users";
import Home from '../src/components/screens/home';

export default function HomePage() {
  const { data } = useRecoilValue(userState);

  return <Home />;
}
