import firebase from 'firebase';

const loginUserWithCredentials = (email, password) => (
    firebase.auth().signInWithEmailAndPassword(email, password)
);

const logoutUser = () => (
    firebase.auth().signOut()
);

const isUserLoggedIn = () => (
    firebase.auth().currentUser != null
);

const AuthService = {
    loginUserWithCredentials,
    logoutUser,
    isUserLoggedIn
};

export default AuthService;
