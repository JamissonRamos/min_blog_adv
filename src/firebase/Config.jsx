
import { initializeApp } from "firebase/app";

import { getFirebase } from 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBhwxtZfKE8gAezSU8lTiddZrFHiwkMbEI",
    authDomain: "miniblog-adv.firebaseapp.com",
    projectId: "miniblog-adv",
    storageBucket: "miniblog-adv.appspot.com",
    messagingSenderId: "754140006325",
    appId: "1:754140006325:web:eaf7ea26207d23ea22fbfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirebase(app)

export {db}