import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBO7h1Cs0D92bL3UCLti7bSukccDhaRTWw",
    authDomain: "react-frontend-56026.firebaseapp.com",
    databaseURL: "https://react-frontend-56026.firebaseio.com",
    projectId: "react-frontend-56026",
    storageBucket: "react-frontend-56026.appspot.com",
    messagingSenderId: "491813496592",
    appId: "1:491813496592:web:a64b3b934e57a88793a795"
};

firebase.initializeApp(firebaseConfig);

export default firebase