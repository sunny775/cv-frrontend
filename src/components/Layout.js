import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import Login from "./auth";
import LinearBuffer from "./LinearBuffer";
import { userState } from "../recoil/atoms/users";

const Layout = ({ children, ...rest }) => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    axios
      .get("/auth/user")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        console.log("You are oofline");
      });
  }, []);

  // return loading ? <LinearBuffer /> : user ? <div>{children}</div> : <Login />;
  return <h1 style={{margin: "30vmin 0", background: 'orange', padding: '4px 20px'}}>page under construction</h1>
};
export default Layout;
