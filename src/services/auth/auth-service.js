import firebase from 'firebase';

const loginUserWithCredentials = (email, password) => (
    firebase.auth().signInWithEmailAndPassword(email, password)
);

const logoutUser = () => (
    firebase.auth().signOut()
);

const AuthService = {
    loginUserWithCredentials,
    logoutUser
};

export default AuthService;
