import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db,storage }