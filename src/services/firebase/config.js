import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6o4L4Ofy1FGhAfG4UV7gEnTrGZVNvgQc",
    authDomain: "app-control-shopping-6b41b.firebaseapp.com",
    projectId: "app-control-shopping-6b41b",
    storageBucket: "app-control-shopping-6b41b.firebasestorage.app",
    messagingSenderId: "794967051218",
    appId: "1:794967051218:web:667c322bbad382a57e160b",
    measurementId: "G-EECDKLVGL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export { analytics, db, auth }