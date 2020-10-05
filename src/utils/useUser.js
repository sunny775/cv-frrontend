/* eslint-disable consistent-return */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "./initFirebase";
import mapUserData from "./mapUserData";

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  // eslint-disable-next-line arrow-body-style
  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push("/auth");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        const userData = mapUserData(user);
        setUser(userData);
      } else {
        setUser();
      }
    });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export default useUser;
