import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAP5aTCTzaovditHU4ieCN9G-vStTgbUJM',
  authDomain: 'mymoney-f9e4d.firebaseapp.com',
  projectId: 'mymoney-f9e4d',
  storageBucket: 'mymoney-f9e4d.appspot.com',
  messagingSenderId: '1096396897931',
  appId: '1:1096396897931:web:1afc6a9c609ae9f206de8e',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp};
