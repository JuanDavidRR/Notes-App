import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyArBLwYfuHvU3ffPzwdpjAZIU31t3r6qr8",
	authDomain: "react-udemy-course-6ac38.firebaseapp.com",
	projectId: "react-udemy-course-6ac38",
	storageBucket: "react-udemy-course-6ac38.appspot.com",
	messagingSenderId: "922095297415",
	appId: "1:922095297415:web:0d2b184bc3f1dedb38a922",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
