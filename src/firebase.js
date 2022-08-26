import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBD5do5KYlw_edxMqzPvKaq3dmuCGoL3tU",
  authDomain: "slack-react-64aa6.firebaseapp.com",
  projectId: "slack-react-64aa6",
  storageBucket: "slack-react-64aa6.appspot.com",
  messagingSenderId: "149423326907",
  appId: "1:149423326907:web:230fe4a6806dfa91fd0b9e",
  measurementId: "G-SXWVRD35SD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
