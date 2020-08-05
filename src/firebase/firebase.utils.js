import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoRCZ_M3Geeqtg9u1925EUzmcJlTzJZGM",
    authDomain: "e-clothing-ada40.firebaseapp.com",
    databaseURL: "https://e-clothing-ada40.firebaseio.com",
    projectId: "e-clothing-ada40",
    storageBucket: "e-clothing-ada40.appspot.com",
    messagingSenderId: "318361149495",
    appId: "1:318361149495:web:5e12a80f5686e5171b1fb2"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
