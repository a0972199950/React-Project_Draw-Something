import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC1b793e1VB-HHIHyuzALDjRBNYhQGBn8I",
    authDomain: "draw-something-f0457.firebaseapp.com",
    databaseURL: "https://draw-something-f0457.firebaseio.com",
    projectId: "draw-something-f0457",
    storageBucket: "draw-something-f0457.appspot.com",
    messagingSenderId: "551258576902"
};
firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export { firebase, googleAuthProvider, database as default };