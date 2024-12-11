import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfigs = {
    dbPrimary: {
        apiKey: "AIzaSyCUjqWxY389z6vK_uVuVO9Jv6lejkjV-YI",
        authDomain: "app-control-shopping.firebaseapp.com",
        projectId: "app-control-shopping",
        storageBucket: "app-control-shopping.firebasestorage.app",
        messagingSenderId: "541756049827",
        appId: "1:541756049827:web:cf744ebb65ea4100077216",
        measurementId: "G-H53WWR4K5C"
    },
    dbSecondary: {
        apiKey: "AIzaSyB6o4L4Ofy1FGhAfG4UV7gEnTrGZVNvgQc",
        authDomain: "app-control-shopping-6b41b.firebaseapp.com",
        projectId: "app-control-shopping-6b41b",
        storageBucket: "app-control-shopping-6b41b.firebasestorage.app",
        messagingSenderId: "794967051218",
        appId: "1:794967051218:web:667c322bbad382a57e160b",
        measurementId: "G-EECDKLVGL3"
    }
};


/* 
    - dbPrimary = Firebase Jamisson;
    - dbSecondary = Firebase Junior;
*/

// Inicializa o Firebase baseado no ambiente desejado
const environment = "dbSecondary"; // ou "dbSecondary"
const firebaseConfig = firebaseConfigs[environment];
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export { analytics, db, auth }