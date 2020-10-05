import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import cookies from "next-cookies";
import axios from "axios";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import ProTip from "../src/components/ProTip";
import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import { userState } from "../src/recoil/atoms/users";

export default function About() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const logout = async () => {
    try {
      const res = await axios.get("/auth/logout");
      setUser(null);
      console.log("logout successful:", res);
      return router.push("/");
    } catch (err) {
      return setUser(null);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

/* export async function getServerSideProps(context) {
  try {
    console.log(context.query);
    const { param, req, res, query } = context;
    console.log(cookies(context));
    // req.owner = 'sonnie'
    // res.cookie('name', 'tobi');
    console.log("fromServer:", req.fromServer);
    const document = admin.firestore().doc("posts/from-get-static-props");
    await document.set({
      title: "getStatciProps rocks",
      body: "Testing ths piece of shit",
    });
    console.log("document saved");
    return {
      props: { result: "document saved" },
    };
  } catch (error) {
    console.log("errresponse:", "error");
    return {
      props: { result: "error" },
    };
  }
} */
