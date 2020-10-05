import firebase from "firebase/app";
import "firebase/auth";

/* const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}; */

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "jaconnect.firebaseapp.com",
      databaseURL: "https://jaconnect.firebaseio.com",
      projectId: "jaconnect",
    });
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  }
}
