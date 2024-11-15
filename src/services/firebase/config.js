import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUjqWxY389z6vK_uVuVO9Jv6lejkjV-YI",
    authDomain: "app-control-shopping.firebaseapp.com",
    projectId: "app-control-shopping",
    storageBucket: "app-control-shopping.firebasestorage.app",
    messagingSenderId: "541756049827",
    appId: "1:541756049827:web:cf744ebb65ea4100077216",
    measurementId: "G-H53WWR4K5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export { analytics, db, auth }