
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClePPGlC7WZysKRT4JIvXRH6IMuIJIWjM",
    authDomain: "fir-react-55e44.firebaseapp.com",
    databaseURL: "https://fir-react-55e44.firebaseio.com",
    projectId: "fir-react-55e44",
    storageBucket: "fir-react-55e44.appspot.com",
    messagingSenderId: "852231364720",
    appId: "1:852231364720:web:0777b2ee3a4f3350a354b5"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;