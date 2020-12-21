import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import FirebaseConfig from "../../config/firebase-config";

const firebaseConnection = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(FirebaseConfig);
    }
    return {
        app: firebase,
        database: firebase.firestore(),
    }
};

export default firebaseConnection;

