import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6ztzAuaEjQNiudYgsRbdRErU3f8DJdN4",
    authDomain: "instagram-clone-209ea.firebaseapp.com",
    databaseURL: "https://instagram-clone-209ea.firebaseio.com",
    projectId: "instagram-clone-209ea",
    storageBucket: "instagram-clone-209ea.appspot.com",
    messagingSenderId: "876834150250",
    appId: "1:876834150250:web:df1e00486d20fd883bb713",
    measurementId: "G-E9NDVXHEYX"
    
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};