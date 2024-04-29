// firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ1QsRj3sFZpoJQJ64ZNVlOSQ_yovNDOU',
  authDomain: 'project-2568238377859063512.firebaseapp.com	',
  databaseURL: "https://project-2568238377859063512.firebaseio.com",
  projectId: 'project-2568238377859063512',
  storageBucket: "project-2568238377859063512.appspot.com",
  messagingSenderId: '986676791028',
  appId: "1:986676791028:web:7a905403ab9c99526440a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export default auth;