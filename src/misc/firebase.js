import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  
    apiKey: "AIzaSyASGA-rI2JrX7CCT_BIkQONND7RgMt4JHY",
    authDomain: "chat-web-app-d0bb1.firebaseapp.com",
    databaseURL: "https://chat-web-app-d0bb1-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-d0bb1",
    storageBucket: "chat-web-app-d0bb1.appspot.com",
    messagingSenderId: "603528922817",
    appId: "1:603528922817:web:b663e22229bdb40a557640"
  
};


const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();