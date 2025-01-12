import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Determine o ambiente a partir do .env
const environment = import.meta.env.VITE_ENVIRONMENT || 'development';


const firebaseConfigs = {
        // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        // appId: import.meta.env.VITE_FIREBASE_APP_ID,
        // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    development: {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    },
    production: {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    }
};


console.log('environment', environment);
console.log('All environment variables:', import.meta.env);

console.log('Firebase Config:', firebaseConfigs);
console.log('Firebase Config [environment]:', firebaseConfigs[environment]);

// Obtenha a configuração correta com base no ambiente
const config = firebaseConfigs[environment];

console.log('config', config);

const app = initializeApp(config);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export { analytics, db, auth }