
import firebase from 'firebase'
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import 'firebase/app';


//firebase details

var firebaseConfig = {
    apiKey: "AIzaSyDiZC2W3bRae4bbQ4w_v6v3dS9b4cyHJWo",
    authDomain: "dividend-stocks-9521e.firebaseapp.com",
    projectId: "dividend-stocks-9521e",
    storageBucket: "dividend-stocks-9521e.appspot.com",
    messagingSenderId: "1011139973245",
    appId: "1:1011139973245:web:e5711ab5512a8eed912114"

};
// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
    let firestore = firebase.firestore();
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebase