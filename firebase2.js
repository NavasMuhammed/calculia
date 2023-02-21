import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyBlJ4xmU8PApdPPpheaYi3faLsJRZWehmY",
    authDomain: "fir-auth-279eb.firebaseapp.com",
    projectId: "fir-auth-279eb",
    storageBucket: "fir-auth-279eb.appspot.com",
    messagingSenderId: "67363008263",
    appId: "1:67363008263:web:64aa1f3337ab8384151fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// let app;
// if (!firebase.apps.length == true) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }
const auth = getAuth(app);

export { auth }