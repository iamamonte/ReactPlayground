import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  projectId: process.env.REACT_APP_FIREBASEPROJECTID
};

firebase.initializeApp(firebaseConfig);

  const firestoreDB = firebase.firestore();

  export {firestoreDB }