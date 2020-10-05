import React from "react";
import Head from "next/head";
import Auth from "../src/components/auth";

const Login = () => (
  <div>
    <Head>
      <title>Campus Connect</title>
      <meta
        name="description"
        content="Connect and Share with people in your campus or other schools"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Auth />
    </div>
  </div>
);

export default Login;
