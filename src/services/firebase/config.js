import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Determine o ambiente a partir do .env
const environment = import.meta.env.VITE_ENVIRONMENT || 'development';

console.log('environment', environment);

const firebaseConfigs = {
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


console.log('Firebase Config:', firebaseConfigs[environment]);

/* 
    - dev = Firebase Jamisson;
    - prod = Firebase Junior;
*/

// Obtenha a configuração correta com base no ambiente
const config = firebaseConfigs[environment];
console.log('config', config);


// Verifique se todas as variáveis estão definidas
for (const key in config) {
    if (!config[key]) {
        throw new Error(`Variável de ambiente não definida para ${environment}: ${key}`);
    }
}
const app = initializeApp(config);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export { analytics, db, auth }