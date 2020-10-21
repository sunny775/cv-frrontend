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
      apiKey: "AIzaSyD2eYZpy4Sl2pIE1Ha5VvXQugCA3gjuYoA",
      authDomain: "campusverve.firebaseapp.com",
      databaseURL: "https://campusverve.firebaseio.com",
      projectId: "campusverve",
      storageBucket: "campusverve.appspot.com",
      messagingSenderId: "35267866420",
      appId: "1:35267866420:web:4badcf824cdfb112d77f61",
      measurementId: "G-BBWDFS6DP8"
    });
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  }
}
