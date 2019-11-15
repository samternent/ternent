// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1SIr-AC23uvvdE64vcGb8oEH7LPB4JRk",
    authDomain: "chat-26b42.firebaseapp.com",
    databaseURL: "https://chat-26b42.firebaseio.com",
    projectId: "chat-26b42",
    storageBucket: "",
    messagingSenderId: "907976896127",
    appId: "1:907976896127:web:e9bf7b92ae8af6e7a6594a",
    measurementId: "G-5YM7E8967J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
