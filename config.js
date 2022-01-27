import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCsDyisEezZwpaqv9GlindLSDGst_5OHu0",
    authDomain: "team-voting-app-88304.firebaseapp.com",
    projectId: "team-voting-app-88304",
    storageBucket: "team-voting-app-88304.appspot.com",
    messagingSenderId: "706777853992",
    appId: "1:706777853992:web:be731ee4bb248025fc851d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();