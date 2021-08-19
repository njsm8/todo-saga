import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB_8N6mORJW7H6sgKKoE2dGKOpA8e6-4jc",
  authDomain: "todo-geek.firebaseapp.com",
  projectId: "todo-geek",
  storageBucket: "todo-geek.appspot.com",
  messagingSenderId: "304513067678",
  appId: "1:304513067678:web:b13ab122fcde483956698f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
