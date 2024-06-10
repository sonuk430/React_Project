import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDNHedRmdnFOjoO83sRvRMjM-au_ddRlTk",
    authDomain: "drive-clone-3da39.firebaseapp.com",
    projectId: "drive-clone-3da39",
    storageBucket: "drive-clone-3da39.appspot.com",
    messagingSenderId: "46614817923",
    appId: "1:46614817923:web:8a5530149fc9e085a9ffb6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }