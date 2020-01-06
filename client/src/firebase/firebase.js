import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAB99Fo8n3bBok5BLpQTBeNwf05EeRsM5U",
  authDomain: "darby-pix.firebaseapp.com",
  databaseURL: "https://darby-pix.firebaseio.com",
  projectId: "darby-pix",
  storageBucket: "darby-pix.appspot.com",
  messagingSenderId: "860022835337",
  appId: "1:860022835337:web:5e6e8f96817848cc0a9e58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;