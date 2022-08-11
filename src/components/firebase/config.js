// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE6nECpIPtQ2QqclZFDMlggfPBzBklCaY",
    authDomain: "plantera-f3af2.firebaseapp.com",
    projectId: "plantera-f3af2",
    storageBucket: "plantera-f3af2.appspot.com",
    messagingSenderId: "589092820546",
    appId: "1:589092820546:web:0b591056a7d269816bbfdb",
    measurementId: "G-KG4ELTZ82C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseConnection = () => app