// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4SxWcovWrhVDmK12GKUL2Qy2EisSUva8",
    authDomain: "web-eng-project-b0a4c.firebaseapp.com",
    projectId: "web-eng-project-b0a4c",
    storageBucket: "web-eng-project-b0a4c.appspot.com",
    messagingSenderId: "748850283796",
    appId: "1:748850283796:web:7bf1136ff67e5ec3ed6e01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);