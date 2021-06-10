import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB5zUAS0j1yBgA9NtR6JZIOJ9z_abt72k0",
    authDomain: "vexflix.firebaseapp.com",
    projectId: "vexflix",
    storageBucket: "vexflix.appspot.com",
    messagingSenderId: "923246582325",
    appId: "1:923246582325:web:cfcd994f5ea5036eb6ef7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {auth}
export default db