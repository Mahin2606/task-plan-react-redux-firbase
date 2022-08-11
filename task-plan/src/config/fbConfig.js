import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

var config = {
    apiKey: "AIzaSyAJQ-PDPleoXClAhl0B8KkbLREFEvGjBLo",
    authDomain: "react-redux-task-plan.firebaseapp.com",
    projectId: "react-redux-task-plan",
    storageBucket: "react-redux-task-plan.appspot.com",
    messagingSenderId: "435127917921",
    appId: "1:435127917921:web:0b64ad942b5adbbc93b920",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });

export default firebase;
 