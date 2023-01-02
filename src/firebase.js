// import { initializeApp } from "firebase/app";        changed due to package error while compiling
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";       changed due to package error while compiling
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

const firebaseConfig = {
    apiKey: "AIzaSyDuauhtVpEewdiOauz4IqDjaV2ZnqHBBNE",
    authDomain: "disneyplus-clone-642bb.firebaseapp.com",
    projectId: "disneyplus-clone-642bb",
    storageBucket: "disneyplus-clone-642bb.appspot.com",
    messagingSenderId: "379052758194",
    appId: "1:379052758194:web:f423bc4b8dfde33d57a5ab",
    measurementId: "G-X2826NRCMW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, analytics, storage };
export default db;